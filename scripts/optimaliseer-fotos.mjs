// Zet elke foto uit fotos-bron/ om naar WebP op vier schermbreedtes en
// schrijft src/photoAssets.ts, waar Photo.tsx uit leest welke breedtes er
// van elke foto bestaan.
//
// Draait vanzelf voor elke build (npm run build, ook op Netlify), zodat een
// foto die via /admin is geüpload meteen op de site staat. Varianten die al
// bestaan worden overgeslagen; alleen nieuwe foto's kosten tijd.
//
// De bronfoto's staan in fotos-bron/ en niet in public/: daardoor komen ze
// wel in git terecht maar niet in de build. In public/photos staan alleen de
// WebP-varianten die de site echt uitlevert.

import { readdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const BRON_DIR = path.join(ROOT, 'fotos-bron');
const PHOTOS_DIR = path.join(ROOT, 'public/photos');
const MANIFEST = path.join(ROOT, 'src/photoAssets.ts');
const BREEDTES = [480, 800, 1200, 1440];
const KWALITEIT = 78;

/** Moet gelijk lopen met fotoNaam() in src/components/Photo.tsx. */
function fotoNaam(bestand) {
  return path
    .basename(bestand)
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const bestaat = (p) => access(p).then(() => true, () => false);

const bestanden = (await readdir(BRON_DIR)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
const regels = [];

for (const bestand of bestanden) {
  const naam = fotoNaam(bestand);
  // rotate() zonder argument draait volgens de EXIF-oriëntatie van de camera.
  const bron = sharp(path.join(BRON_DIR, bestand)).rotate();
  const { width: breedteOrigineel } = await bron.clone().toBuffer({ resolveWithObject: true }).then((r) => r.info);

  // Nooit opschalen: dat kost bytes en levert geen scherpte op. Een foto
  // smaller dan de kleinste stap krijgt toch één variant.
  let breedtes = BREEDTES.filter((w) => w <= breedteOrigineel);
  if (breedtes.length === 0) breedtes = [breedteOrigineel];

  for (const w of breedtes) {
    const uit = path.join(PHOTOS_DIR, `${naam}-${w}.webp`);
    if (await bestaat(uit)) continue;
    console.log(`→ ${naam}-${w}.webp`);
    await bron.clone().resize({ width: w }).webp({ quality: KWALITEIT }).toFile(uit);
  }

  regels.push(`  '${naam}': { widths: [${breedtes.join(',')}] },`);
}

await writeFile(
  MANIFEST,
  `/**
 * Welke breedtes er van elke foto bestaan. Photo.tsx bouwt hier de srcset
 * uit op.
 *
 * Gegenereerd door scripts/optimaliseer-fotos.mjs — niet met de hand aanpassen.
 */
export interface PhotoAsset {
  widths: number[];
}

export const photoAssets: Record<string, PhotoAsset> = {
${regels.sort().join('\n')}
};
`,
);
console.log(`Klaar: ${bestanden.length} foto's in ${path.relative(ROOT, MANIFEST)}.`);
