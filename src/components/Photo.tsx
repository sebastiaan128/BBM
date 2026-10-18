import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react';
import { photoAssets } from '../photoAssets';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'srcSet'> & {
  /** Naam van de foto ('coaching'), of het pad uit de content ('/fotos-bron/coaching.jpg'). */
  src: string;
  /** Leeg laten voor decoratieve beelden, net als bij een gewone <img>. */
  alt: string;
  /**
   * Hoe breed het beeld in beeld staat, zodat de browser de juiste variant
   * kiest. De standaard past bij een kaart in een raster; een foto die een
   * halve of hele pagina beslaat hoort dat zelf te zeggen.
   */
  sizes?: string;
};

const STANDAARD_SIZES = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

/**
 * Van wat er in de content staat ('/fotos-bron/Foto Marcel.JPG' uit /admin,
 * of al 'foto-marcel') naar de naam waaronder de varianten bestaan. Moet
 * gelijk lopen met fotoNaam() in scripts/optimaliseer-fotos.mjs.
 */
export function fotoNaam(src: string) {
  return src
    .replace(/^.*\//, '')
    .replace(/\.(jpe?g|png|webp)$/i, '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Een foto met de .photo-uitsnede, in WebP en op de breedte die bij het scherm
 * past. Zolang het beeld onderweg is toont .photo een skeleton (een grijs vlak
 * met een lichtgolf); is-loaded zet die stil zodra de foto er is.
 */
export default function Photo({ src: bron, className = '', sizes, onLoad, onError, ...rest }: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const src = fotoNaam(bron);
  const asset = photoAssets[src];

  // Een beeld uit de cache is bij het mounten al compleet en vuurt geen
  // load-event meer. Zonder deze check blijft het skeleton staan.
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  if (!asset) {
    // Zichtbaar mislopen is beter dan een stille lege plek: dit betekent dat
    // photos.ts een naam noemt die niet in fotos-bron staat.
    if (import.meta.env.DEV) console.warn(`Photo: geen varianten bekend voor "${src}"`);
    return null;
  }

  const grootste = asset.widths[asset.widths.length - 1];

  return (
    <img
      ref={ref}
      src={`/photos/${src}-${grootste}.webp`}
      srcSet={asset.widths.map((w) => `/photos/${src}-${w}.webp ${w}w`).join(', ')}
      sizes={sizes ?? STANDAARD_SIZES}
      decoding="async"
      className={`photo ${loaded ? 'is-loaded' : ''} ${className}`.trim()}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      // Ook bij een kapotte bron doorlaten: liever het alt-teken dan een
      // skeleton dat voorgoed blijft golven.
      onError={(e) => {
        setLoaded(true);
        onError?.(e);
      }}
      {...rest}
    />
  );
}
