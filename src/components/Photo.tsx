import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react';
import { photoAssets } from '../photoAssets';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'srcSet'> & {
  /** Naam van de foto, zoals in photos.ts. Dus 'coaching', geen pad. */
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
 * Een foto met de .photo-uitsnede, in WebP en op de breedte die bij het scherm
 * past. Zolang het beeld onderweg is staat er een sterk vergroot voorbeeldje
 * van 20px als achtergrond: je ziet de kleuren en de compositie al, en de foto
 * scherpt daar overheen aan in plaats van uit een grijs vlak te springen.
 */
export default function Photo({ src, className = '', sizes, onLoad, onError, ...rest }: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const asset = photoAssets[src];

  // Een beeld uit de cache is bij het mounten al compleet en vuurt geen
  // load-event meer. Zonder deze check blijft het onscherp staan.
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
      style={loaded ? undefined : { backgroundImage: `url("${asset.blur}")` }}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      // Ook bij een kapotte bron doorlaten: liever het alt-teken dan een vak
      // dat voorgoed onscherp blijft.
      onError={(e) => {
        setLoaded(true);
        onError?.(e);
      }}
      {...rest}
    />
  );
}
