import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

import AboutMain from './components/Header/About/AboutMain'
import IQAC from './components/Header/About/IQAC/IQAC';
import JNTUGV from './components/Header/About/JNTUGV/JNTUGV';
import Director from './components/Header/About/DIRECTOR/Director';
import { Route, Routes } from 'react-router-dom';
// import QAT from './components/Header/QAT/QAT';
import ProgrammesOffered from './components/Header/Programmes_offered/ProgrammesOffered';

function App() {
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
      </Routes>

      {/*<QAT/>*/}
      <ProgrammesOffered/>
      

      <Footer />
    </div>
  );
}

export default App;
