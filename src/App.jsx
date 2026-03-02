import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import PracticeAreas from './components/pages/PracticeAreas';
import About from './components/pages/About';
import AmrutaBharadwaj from './components/pages/pillars/AmrutaBharadwaj';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/about" element={<About />} />
          <Route path="/pillars/amruta" element={<AmrutaBharadwaj />} />
          <Route path="*" element={<div className="flex items-center justify-center min-h-[50vh]"><h2 className="text-3xl text-brand-gold">Coming Soon</h2></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
