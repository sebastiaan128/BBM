import { StrictMode } from 'react';
// De browser-variant, want die geeft een gewone web-stream terug en heeft
// dus geen Node-typen nodig. Node draait hem prima.
import { renderToReadableStream } from 'react-dom/server.browser';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes } from './App';

/**
 * Rendert één pagina naar HTML. Alleen voor de build: scripts/seo-paginas.mjs
 * zet het resultaat in <div id="root">, zodat Google en linkvoorbeelden de
 * tekst van de pagina zien zonder eerst JavaScript te draaien. In de browser
 * neemt main.tsx die HTML daarna over (hydrateRoot).
 *
 * allReady wacht tot de lazy geladen pagina binnen is; renderToString zou
 * alleen het laadscherm opleveren.
 */
export async function render(url: string): Promise<string> {
  let fout: unknown;
  const stream = await renderToReadableStream(
    <StrictMode>
      <StaticRouter location={url} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
    { onError: (e) => void (fout = e) },
  );
  await stream.allReady;
  if (fout) throw fout;
  return new Response(stream).text();
}
