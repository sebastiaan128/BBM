import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Root from './Root';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));
const Proefdag = lazy(() => import('./pages/Proefdag'));
const PersonalTrainingPage = lazy(() => import('./pages/PersonalTrainingPage'));
const Tarieven = lazy(() => import('./pages/Tarieven'));
const Contact = lazy(() => import('./pages/Contact'));
const GroepstrainingenOverview = lazy(() => import('./pages/groepstrainingen/Overview'));
const SmallGroup = lazy(() => import('./pages/groepstrainingen/SmallGroup'));
const Bootcamp = lazy(() => import('./pages/groepstrainingen/Bootcamp'));
const Tabata = lazy(() => import('./pages/groepstrainingen/Tabata'));
const Circuit = lazy(() => import('./pages/groepstrainingen/Circuit'));
const Kids = lazy(() => import('./pages/groepstrainingen/Kids'));
const Corporate = lazy(() => import('./pages/groepstrainingen/Corporate'));
const Rooster = lazy(() => import('./pages/groepstrainingen/Rooster'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper">
      <p className="mono text-[0.6875rem] uppercase tracking-[0.18em] text-stone">Laden</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
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
              <Route path="groepstrainingen/small-group" element={<SmallGroup />} />
              <Route path="groepstrainingen/bootcamp" element={<Bootcamp />} />
              <Route path="groepstrainingen/tabata" element={<Tabata />} />
              <Route path="groepstrainingen/circuit" element={<Circuit />} />
              <Route path="groepstrainingen/kids" element={<Kids />} />
              <Route path="groepstrainingen/corporate" element={<Corporate />} />
              <Route path="groepstrainingen/rooster" element={<Rooster />} />

              {/* Alles wat niet bestaat, mét navigatie en footer eromheen */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
