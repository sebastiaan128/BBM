import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { site } from '../site';

const MAPS_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907.3597920090741!2d5.503261184825531!3d51.983427245326475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c651494090b197%3A0x1c69d179c91fc018!2sBody%20by%20Marcel!5e0!3m2!1snl!2snl!4v1774468241137!5m2!1snl!2snl';

/**
 * Google Maps plaatst zelf cookies, dus de kaart laadt pas als de bezoeker
 * erom vraagt. Tot dan staat er een knop met het adres.
 */
export default function MapEmbed() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <iframe
        src={MAPS_SRC}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Locatie van Body by Marcel op Google Maps"
      />
    );
  }

  return (
    <div className="h-full flex flex-col items-center justify-center gap-4 p-6 text-center">
      <MapPin size={28} className="text-moss" aria-hidden="true" />
      <p className="text-sm text-ink-soft">
        {site.contact.straat}, {site.contact.postcodePlaats}
      </p>
      <button type="button" onClick={() => setShow(true)} className="btn btn-outline">
        Kaart tonen
      </button>
      <p className="text-xs text-stone max-w-xs">Google Maps plaatst cookies zodra de kaart laadt.</p>
    </div>
  );
}
