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
import Coursedetails from './components/Header/Coursedetails/Coursedetails';
import UGsyllabus from './components/Header/Coursedetails/UGsyllabus/UGsyllabus';
import ProgrammesOffered from './components/Header/Programmes_offered/ProgrammesOffered';
import Reports from './components/Header/Reports/Reports';
import QAT from './components/Header/QAT/QAT';
import AQAR from './components/Header/AQAR/AQAR';
import PdfViewer from './components/Header/AQAR/PdfViewer';
import FeedbackformsMain from './components/Header/Feedbackforms/FeedbackformsMain';
import Faculty from './components/Header/Feedbackforms/Faculty/Faculty';
import Student from './components/Header/Feedbackforms/Student/Student';
import Alumni from './components/Header/Feedbackforms/Alumni/Alumni';
import CS from './components/Home/Data/CS';
import VisionMission from './components/Home/Data/Visionmission';
import IIQA from './components/Home/Data/IIQA';
import NAAC from './components/Home/Data/NAAC';
import NAACSSR from './components/Home/Data/NAACSSR';
import FA from './components/Home/Data/FA';
import Acts from './components/Home/Data/Acts';
import Policies from './components/Home/Data/Policies';
import Coc from './components/Home/Data/Coc';
import Syllabus from './components/Home/Data/Syllabus';
import Feedback from './components/Home/Data/Feedback';
import Constitution from './components/Home/Data/Constitution';
import AICTE from './components/Home/Data/AICTE';
import PCOI from './components/Home/Data/PCOI';
import NewsandEvents from './components/Home/NewsandEvents/NewsandEvents';
import Scrollbar from './components/Home/NewsandEvents/Scrollbar';
import UpdatePanel from './components/Home/UpdatePanel/UpdatePanel';






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
        <Route path="/reports" element={<Reports />} />

        
  <Route path="/about-course-details" element={<Coursedetails />}>
    <Route path="about-ug-syllabus" element={<UGsyllabus />} />
    {/* Add more nested routes as needed */}
  </Route>



        
        <Route path="/programmes-offered" element={<ProgrammesOffered />} />
        <Route path="/qat" element={<QAT />} />
        <Route path="/aqar" element={<AQAR />} />
        <Route path="/pdf-viewer/:path" element={<PdfViewer />} />
      
      <Route path="/feedbackforms" element={<FeedbackformsMain />}>
          <Route path="faculty-form" element={<Faculty />} />
          <Route path="student-form" element={<Student />} />
          <Route path="alumni-form" element={<Alumni />} />
        </Route>
        
        <Route path="/about-vision-mission" element={<VisionMission />} />
        <Route path="/about-consulty-services" element={<CS />} />
        <Route path="/about-iiqa" element={<IIQA />} /> 
        <Route path="/about-naac-criteria" element={<NAAC />} /> 
        <Route path="/about-naac-ssr" element={<NAACSSR />} /> 
        <Route path="/about-faculty-awards" element={<FA />} />
        <Route path="/about-acts-statuses" element={<Acts />} />
        <Route path="/about-policies" element={<Policies />} />
        <Route path="/about-code-of-conduct" element={<Coc />} />
        <Route path="/about-syllabus" element={<Syllabus />} />
        <Route path="/about-feedback-details" element={<Feedback />} />
        <Route path="/about-constitution-of-iqac" element={<Constitution />} />
        <Route path="/about-aicte-approvals" element={<AICTE />} />
        <Route path="/about-pcoi" element={<PCOI />} />
        <Route path="/news-and-events" element={<NewsandEvents />} /> 
        <Route path="/scrolling-bar" element={<Scrollbar />} />
        <Route path="/update-panel" element={<UpdatePanel />} />
        </Routes>

        

      {/* Conditionally render the Footer only on the home page */}
      {isHomePage && <Footer />}
    </div>
  );
}

export default App;
