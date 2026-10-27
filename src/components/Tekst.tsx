import { Fragment } from 'react';
import { prijsTekst } from '../prijs';

/*
 * Tekst uit src/content/ (en dus uit /admin) komt binnen als platte tekst.
 * Deze twee helpers geven er net genoeg opmaak aan:
 *   - een enter is een regelafbreking (voor koppen als "Kracht, rust\nen voeding")
 *   - een lege regel begint een nieuwe alinea
 *   - **zo** wordt vetgedrukt
 */

function Vet({ tekst }: { tekst: string }) {
  return (
    <>
      {prijsTekst(tekst).split(/(\*\*[^*]+\*\*)/).map((deel, i) =>
        deel.startsWith('**') && deel.endsWith('**') ? (
          <strong key={i} className="text-ink font-semibold">
            {deel.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={i}>{deel}</Fragment>
        ),
      )}
    </>
  );
}

/** Eén regel of kop, met enters als <br />. */
export function Regels({ tekst }: { tekst: string }) {
  const regels = tekst.trim().split('\n');
  return (
    <>
      {regels.map((r, i) => (
        <Fragment key={i}>
          <Vet tekst={r} />
          {i < regels.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
}

/** Lopende tekst: elke door een lege regel gescheiden alinea wordt een <p>. */
export function Alineas({ tekst, className }: { tekst: string; className?: string }) {
  return (
    <>
      {tekst
        .trim()
        .split(/\n\s*\n/)
        .map((alinea, i) => (
          <p key={i} className={className}>
            <Regels tekst={alinea} />
          </p>
        ))}
    </>
  );
}
