import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
// Lettertypes van de eigen server in plaats van Google Fonts: geen verzoek
// naar Google bij elk bezoek (AVG), en een verbinding minder. Alleen de
// gewichten en de Latijnse tekenset die de site echt gebruikt.
import '@fontsource/instrument-sans/latin-400.css';
import '@fontsource/instrument-sans/latin-400-italic.css';
import '@fontsource/instrument-sans/latin-500.css';
import '@fontsource/instrument-sans/latin-600.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-500.css';
import '@fontsource/tinos/latin-400.css';
import '@fontsource/tinos/latin-700.css';
import './styles/index.css';
import App from './App';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// In de build staat de pagina al als HTML in #root (scripts/seo-paginas.mjs);
// die nemen we over in plaats van hem weg te gooien en opnieuw te tekenen.
// Met `npm run dev` is #root leeg.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
