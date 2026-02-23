import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cabins from './pages/Cabins';
import Dining from './pages/Dining';
import Spa from './pages/Spa';
import Cocktails from './pages/Cocktails';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cabins" element={<Cabins />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
