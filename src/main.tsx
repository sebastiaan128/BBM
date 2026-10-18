import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
