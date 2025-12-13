import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Academy from './pages/Academy';
import Coaches from './pages/Coaches';
import Memberships from './pages/Memberships';
import Events from './pages/Events';
import Rentals from './pages/Rentals';
import OurSports from './pages/OurSports';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Waiver from './pages/Waiver';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CricketLaneRental from './pages/CricketLaneRental';
import BadmintonCourtRental from './pages/BadmintonCourtRental';
import SoccerFieldRental from './pages/SoccerFieldRental';
import DodgeballCourtRental from './pages/DodgeballCourtRental';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-[#020408] transition-colors duration-300">
          <TopBar />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sports" element={<OurSports />} />
            <Route path="/about" element={<About />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/academy/coaches" element={<Coaches />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/events" element={<Events />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/cricket-lanes" element={<CricketLaneRental />} />
            <Route path="/badminton-courts" element={<BadmintonCourtRental />} />
            <Route path="/soccer-fields" element={<SoccerFieldRental />} />
            <Route path="/dodgeball-courts" element={<DodgeballCourtRental />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/waiver" element={<Waiver />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;