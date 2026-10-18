import { Component, type ErrorInfo, type ReactNode } from 'react';
import { site, telLink } from '../site';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Vangt fouten in de render van onderliggende componenten op. Zonder deze
 * grens levert een fout een leeg wit scherm op.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Zichtbaar in de console voor wie de site beheert.
    console.error('Er ging iets mis bij het tonen van deze pagina:', error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-screen bg-paper flex items-center px-6 py-20">
        <div className="max-w-lg mx-auto">
          <span className="eyebrow">Er ging iets mis</span>

          <h1 className="display-lg mt-6 text-ink">Deze pagina laadt niet</h1>

          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Er zit een fout in de pagina. Probeer hem opnieuw te laden. Blijft het misgaan, bel ons
            dan even, dan plannen we je training gewoon telefonisch in.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button onClick={() => window.location.reload()} className="btn btn-lime">
              Opnieuw laden
            </button>
            <a href="/" className="btn btn-outline">
              Naar de homepage
            </a>
          </div>

          <p className="mt-8 text-sm text-stone">
            Liever bellen?{' '}
            <a href={telLink} className="mono text-moss underline underline-offset-4 decoration-1 hover:decoration-2">
              {site.contact.telefoon}
            </a>
          </p>
        </div>
      </div>
    );
  }
}
