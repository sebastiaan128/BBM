/// <reference types="vite/client" />

// Zelfde functies als react-dom/server; zie src/entry-server.tsx.
declare module 'react-dom/server.browser' {
  export { renderToReadableStream } from 'react-dom/server';
}
