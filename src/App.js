import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';


import AboutMain from './components/Header/About/AboutMain'
import IQAC from './components/Header/About/IQAC/IQAC';
import JNTUGV from './components/Header/About/JNTU-GV/JNTUGV';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <Header /><br />
      <Home />

      <Routes>
        <Route path="/about-us" element={<AboutMain />}>
          <Route path="about-iqac" element={<IQAC />} />
          <Route path="about-jntugv" element={<JNTUGV />} />
          
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
