import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import Root from './Root';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './pages/NotFound';
import { routeLoaders } from './routes';

const Home = lazy(routeLoaders['/']);
const Proefdag = lazy(routeLoaders['/proefdag']);
const PersonalTrainingPage = lazy(routeLoaders['/personal-training']);
const Tarieven = lazy(routeLoaders['/tarieven']);
const Contact = lazy(routeLoaders['/contact']);
const GroepstrainingenOverview = lazy(routeLoaders['/groepstrainingen']);
const Bootcamp = lazy(routeLoaders['/groepstrainingen/bootcamp']);
const Tabata = lazy(routeLoaders['/groepstrainingen/tabata']);
const Kids = lazy(routeLoaders['/groepstrainingen/kids']);
const Corporate = lazy(routeLoaders['/groepstrainingen/corporate']);
const Zumba = lazy(routeLoaders['/groepstrainingen/zumba']);
const Calisthenics = lazy(routeLoaders['/groepstrainingen/calisthenics']);
const Rooster = lazy(routeLoaders['/groepstrainingen/rooster']);
const PrivacyPolicy = lazy(routeLoaders['/privacy-policy']);
const AlgemeneVoorwaarden = lazy(routeLoaders['/algemene-voorwaarden']);

/**
 * Een laadscherm dat pas verschijnt als het laden echt merkbaar is. Bij een
 * snelle verbinding is de pagina binnen een paar honderd milliseconden
 * binnen, en dan is een scherm dat oplicht en meteen weer verdwijnt
 * storender dan even niets.
 */
function PageLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 250);
    return () => clearTimeout(id);
  }, []);

  if (!visible) return <div className="min-h-screen bg-paper" />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-paper">
      <p className="mono text-[0.6875rem] uppercase tracking-[0.18em] text-stone">Laden</p>
    </div>
  );
}

export default function App() {
  return (
    // v7_startTransition laat React de vorige pagina in beeld houden terwijl
    // de volgende binnenkomt, in plaats van hem te vervangen door het
    // laadscherm. Samen met het vooruit ophalen van links is een navigatie
    // daardoor een directe wissel.
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Root />}>
              <Route index element={<Home />} />
              <Route path="proefdag" element={<Proefdag />} />
              <Route path="personal-training" element={<PersonalTrainingPage />} />
              <Route path="tarieven" element={<Tarieven />} />
              <Route path="contact" element={<Contact />} />
              <Route path="groepstrainingen" element={<GroepstrainingenOverview />} />
              <Route path="groepstrainingen/bootcamp" element={<Bootcamp />} />
              <Route path="groepstrainingen/tabata" element={<Tabata />} />
              <Route path="groepstrainingen/kids" element={<Kids />} />
              <Route path="groepstrainingen/corporate" element={<Corporate />} />
              <Route path="groepstrainingen/zumba" element={<Zumba />} />
              <Route path="groepstrainingen/calisthenics" element={<Calisthenics />} />
              <Route path="groepstrainingen/rooster" element={<Rooster />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />

              {/* Alles wat niet bestaat, mét navigatie en footer eromheen */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
