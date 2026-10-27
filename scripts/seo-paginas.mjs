// Draait na `vite build`. De site is één JavaScript-app, dus zonder dit
// script krijgt elke pagina dezelfde <title> en omschrijving. Zoekmachines
// en vooral WhatsApp/Facebook (die geen JavaScript draaien) zien dan op
// /tarieven nog steeds de homepage.
//
// Per pagina uit src/content/seo.json schrijft dit script daarom een eigen
// dist/<pad>.html met de juiste titel, omschrijving, canonical en
// deelafbeelding. Netlify levert een bestaand bestand voor de SPA-regel in
// _redirects, dus /tarieven krijgt dit bestand en de app start daarna gewoon.
//
// In <div id="root"> komt de pagina zelf al als HTML (via de server-build
// van src/entry-server.tsx), zodat zoekmachines de tekst lezen zonder
// JavaScript te hoeven draaien. main.tsx neemt die HTML daarna over.
//
// Verder: dist/sitemap.xml, dist/robots.txt, dist/og.jpg (deelafbeelding,
// 1200×630) en LocalBusiness-gegevens voor Google op elke pagina.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DIST = path.join(ROOT, 'dist');
const lees = async (p) => JSON.parse(await readFile(path.join(ROOT, p), 'utf8'));

const seo = await lees('src/content/seo.json');
const site = await lees('src/content/site.json');
const basis = seo.siteUrl.replace(/\/$/, '');

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ── Deelafbeelding ────────────────────────────────────────────────────
// JPEG en niet WebP: niet elke app toont WebP in een linkvoorbeeld.
await sharp(path.join(ROOT, seo.deelfoto.replace(/^\//, '')))
  .rotate()
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 82 })
  .toFile(path.join(DIST, 'og.jpg'));

// ── Bedrijfsgegevens voor Google ──────────────────────────────────────
const dagCodes = {
  'maandag t/m vrijdag': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  'maandag t/m zaterdag': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  maandag: ['Monday'],
  dinsdag: ['Tuesday'],
  woensdag: ['Wednesday'],
  donderdag: ['Thursday'],
  vrijdag: ['Friday'],
  zaterdag: ['Saturday'],
  zondag: ['Sunday'],
};
// "08:00 – 12:00\n16:00 – 22:00" → twee blokken. Een regel die niet zo
// leest (zoals "Gesloten") of een dag die we niet kennen, slaan we over:
// liever geen tijden in de zoekresultaten dan verkeerde.
const openingstijden = site.openingstijden.flatMap((o) => {
  const dagen = dagCodes[o.dagen.trim().toLowerCase()];
  if (!dagen) return [];
  return [...o.tijden.matchAll(/(\d{1,2}[:.]\d{2})\s*[–-]\s*(\d{1,2}[:.]\d{2})/g)].map((m) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: dagen,
    opens: m[1].replace('.', ':'),
    closes: m[2].replace('.', ':'),
  }));
});
// "3921 AD Elst (U)" → postcode "3921 AD", plaats "Elst".
const adres = site.contact.postcodePlaats.match(/^(\d{4}\s?[A-Z]{2})\s+(.+?)(\s*\(.*\))?$/);
// "06-42059446" → "+31642059446": Google wil het nummer internationaal.
const cijfers = site.contact.telefoon.replace(/\D/g, '');
const telefoon = cijfers.startsWith('0') ? `+31${cijfers.slice(1)}` : site.contact.telefoon;
const bedrijf = {
  '@context': 'https://schema.org',
  '@type': 'HealthClub',
  '@id': `${basis}/#bedrijf`,
  name: 'Body by Marcel',
  description: seo.standaardOmschrijving,
  url: `${basis}/`,
  image: `${basis}/og.jpg`,
  logo: `${basis}/logo.png`,
  telephone: telefoon,
  email: site.contact.email,
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.contact.straat,
    postalCode: adres?.[1] ?? '',
    addressLocality: adres?.[2] ?? site.contact.postcodePlaats,
    addressRegion: 'Utrecht',
    addressCountry: 'NL',
  },
  // Zelfde punt als de kaart in MapEmbed.tsx.
  geo: { '@type': 'GeoCoordinates', latitude: 51.98343, longitude: 5.50326 },
  hasMap: site.contact.mapsLink,
  areaServed: ['Elst', 'Rhenen', 'Veenendaal', 'Amerongen'].map((name) => ({ '@type': 'City', name })),
  openingHoursSpecification: openingstijden,
  sameAs: Object.values(site.social).filter(Boolean),
};

// Kruimelpad voor de zoekresultaten: "Body by Marcel › Groepstrainingen ›
// Bootcamp" in plaats van een kale URL. Elke tussenstap moet zelf een
// pagina zijn; de naam komt uit de titel, zonder " · Body by Marcel".
const titelVan = (pad) => {
  const p = seo.paginas.find((x) => x.pad === pad);
  return p ? p.titel.split(' · ')[0] : null;
};
function kruimelpad(pagina) {
  if (pagina.pad === '/') return null;
  const stappen = [{ pad: '/', naam: 'Home' }];
  const delen = pagina.pad.split('/').filter(Boolean);
  delen.forEach((_, i) => {
    const pad = '/' + delen.slice(0, i + 1).join('/');
    const naam = titelVan(pad);
    if (naam) stappen.push({ pad, naam });
  });
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: stappen.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.naam,
      item: `${basis}${s.pad}`,
    })),
  };
}

const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

// ── Pagina's ──────────────────────────────────────────────────────────
const sjabloon = await readFile(path.join(DIST, 'index.html'), 'utf8');

function kop(pagina) {
  const url = `${basis}${pagina.pad === '/' ? '/' : pagina.pad}`;
  return [
    `<title>${esc(pagina.titel)}</title>`,
    `<meta name="description" content="${esc(pagina.omschrijving)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="nl_NL" />`,
    `<meta property="og:site_name" content="Body by Marcel" />`,
    `<meta property="og:title" content="${esc(pagina.titel)}" />`,
    `<meta property="og:description" content="${esc(pagina.omschrijving)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${basis}/og.jpg" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="De sportschool van Body by Marcel in Elst" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    // De HTML staat er al, maar [data-reveal] begint onzichtbaar tot het
    // script het laat binnenkomen. Zonder JavaScript gewoon tonen.
    `<noscript><style>[data-reveal]{opacity:1;transform:none}</style></noscript>`,
    jsonLd(bedrijf),
    ...(kruimelpad(pagina) ? [jsonLd(kruimelpad(pagina))] : []),
  ].join('\n    ');
}

function metKop(html, pagina) {
  const zonder = html
    .replace(/<title>[\s\S]*?<\/title>\s*/, '')
    .replace(/<meta\s+name="description"[\s\S]*?\/>\s*/, '');
  if (zonder === html) throw new Error('index.html heeft geen <title> of description meer om te vervangen');
  return zonder.replace('</head>', `  ${kop(pagina)}\n  </head>`);
}

// Productie-React: sneller, en zonder ontwikkelwaarschuwingen in de buildlog.
process.env.NODE_ENV = 'production';
const { render } = await import(pathToFileURL(path.join(ROOT, 'dist-ssr/entry-server.js')).href);

async function metInhoud(html, pagina) {
  const leeg = '<div id="root"></div>';
  if (!html.includes(leeg)) throw new Error('index.html heeft geen lege <div id="root"> meer');
  const inhoud = await render(pagina.pad);
  return html.replace(leeg, `<div id="root">${inhoud}</div>`);
}

// /tarieven wordt tarieven.html en niet tarieven/index.html: een map laat
// Netlify doorsturen naar /tarieven/ (met slash), en dan wijst de canonical
// naar een adres dat zelf doorstuurt. Een .html-bestand levert Netlify
// direct op /tarieven uit.
for (const pagina of seo.paginas) {
  const html = await metInhoud(metKop(sjabloon, pagina), pagina);
  const bestand = pagina.pad === '/' ? path.join(DIST, 'index.html') : path.join(DIST, `${pagina.pad}.html`);
  await mkdir(path.dirname(bestand), { recursive: true });
  await writeFile(bestand, html);
}

// ── 404 ────────────────────────────────────────────────────────────────
// Elk onbekend adres krijgt dit bestand met status 404 (zie _redirects).
// De root blijft leeg: een vooraf gerenderde pagina zou in de browser niet
// passen bij wat de app op dat adres tekent. Zonder inhoud start de app
// gewoon en toont NotFound.
await writeFile(
  path.join(DIST, '404.html'),
  sjabloon
    .replace(/<title>[\s\S]*?<\/title>/, '<title>Pagina niet gevonden · Body by Marcel</title>')
    .replace('</head>', '  <meta name="robots" content="noindex" />\n  </head>'),
);

// ── Sitemap en robots.txt ─────────────────────────────────────────────
const vandaag = new Date().toISOString().slice(0, 10);
await writeFile(
  path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${seo.paginas
  .map((p) => `  <url><loc>${esc(basis + (p.pad === '/' ? '/' : p.pad))}</loc><lastmod>${vandaag}</lastmod></url>`)
  .join('\n')}
</urlset>
`,
);
await writeFile(
  path.join(DIST, 'robots.txt'),
  `User-agent: *
Disallow: /admin/

Sitemap: ${basis}/sitemap.xml
`,
);

console.log(`SEO: ${seo.paginas.length} pagina's, sitemap, robots.txt en og.jpg geschreven.`);
