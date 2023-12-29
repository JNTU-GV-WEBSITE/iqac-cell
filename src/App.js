import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import AboutMain from './components/Header/About/AboutMain';
import IQAC from './components/Header/About/IQAC/IQAC';
import JNTUGV from './components/Header/About/JNTUGV/JNTUGV';
import Director from './components/Header/About/DIRECTOR/Director';
import ProgrammesOffered from './components/Header/Programmes_offered/ProgrammesOffered';
import QAT from './components/Header/QAT/QAT';

function App() {
  const location = useLocation();

  // Check if the current route is the home page ("/")
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Header /><br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutMain />}>
          <Route path="about-iqac" element={<IQAC />} />
          <Route path="about-jntugv" element={<JNTUGV />} />
          <Route path="about-director" element={<Director />} />
        </Route>
        <Route path="/programmes-offered" element={<ProgrammesOffered />} />
        <Route path="/qat" element={<QAT />} />
      </Routes>

      {/* Conditionally render the Footer only on the home page */}
      {isHomePage && <Footer />}
    </div>
  );
}

export default App;
