import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import Engineering from './pages/Engineering';
import LifeAndLogbook from './pages/LifeAndLogbook';
import ReadingArchive from './pages/ReadingArchive';
import RobolabArticle from './pages/RobolabArticle';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  const navType = useNavigationType();

  // Dynamic background logic based on route
  useEffect(() => {
    if (navType !== 'POP') {
      window.scrollTo(0, 0);
    }
    const root = document.documentElement;
    if (location.pathname === '/life' || location.pathname === '/reading-archive') {
      // Light Mode
      root.style.setProperty('--bg-primary', '#FAF8F5'); // Ivory
      root.style.setProperty('--text-primary', '#0D0D12'); // Obsidian
      root.style.setProperty('--text-secondary', '#475569'); // slate-600 for light mode
      root.style.setProperty('--accent', '#10B981'); // Emerald
    } else {
      // Dark Mode (Midnight Luxe)
      root.style.setProperty('--bg-primary', '#0D0D12'); // Obsidian
      root.style.setProperty('--text-primary', '#FAF8F5'); // Ivory
      root.style.setProperty('--text-secondary', '#94A3B8'); // slate-400 for dark mode
      root.style.setProperty('--accent', '#10B981'); // Emerald
    }
  }, [location.pathname]);

  return (
    <div className="relative w-full min-h-[100dvh] bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-1000 ease-in-out font-sans">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/engineering/robolab" element={<RobolabArticle />} />
          <Route path="/life" element={<LifeAndLogbook />} />
          <Route path="/reading-archive" element={<ReadingArchive />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
