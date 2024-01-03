import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
import '@fortawesome/fontawesome-free/css/all.css';
// import NewsandEvents from "./NewsandEvents/NewsandEvents";
import Scrollbar from "./NewsandEvents/Scrollbar";
import UpdatePanel from "./UpdatePanel/UpdatePanel";

function Home() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContentContainer">
        <div className="allRightContent">
          <div className="allRightContentHeading">Internal Quality Assurance Cell [IQAC]</div>
          <div className="allRightContentProfile">
            {/* Profile information */}
            <center></center>
            <hr />
            {/* Profile description */}
            <ul>
  <Link to="/about-us/about-iqac" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>About IQAC</Link><br />
  <Link to="/about-us/about-jntugv" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>About JNTUGV</Link><br />
  <Link to="/about-iiqa" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>Institutional Information for Quality Assessment(IIQA)</Link><br />
  <Link to="/about-naac-criteria" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>NAAC Criteria</Link><br />
  <Link to="/about-naac-ssr" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>NAAC Self Study Report(SSR)</Link><br />
  <Link to="/about-faculty-awards" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span> Faculty Awards</Link><br />
  <Link to="/about-acts-statuses" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>The JNTU-GV University Act & Statutes</Link><br />
  <Link to="/about-vision-mission" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>The JNTU-GV University Vision & Mission</Link><br />
  <Link to="/about-policies" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>The JNTU-GV Research Policy & Guidelines</Link><br />
  <Link to="/about-code-of-conduct" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>Code of conduct</Link><br />
  <Link to="/about-syllabus" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>Syllabus</Link><br />
  <Link to="/about-feedback-details" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>Feedback details of curriculum</Link><br />
  <Link to="/AQAR" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>Annual Quality Assurance Report</Link><br />
 <Link to="/about-consulty-services" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>Rules for Consulytancy Services</Link><br />
  <Link to="/about-constitution-of-iqac" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>Constitution of IQAC</Link><br />
  <Link to="/about-aicte-approvals" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>AICTE Approvals</Link><br />
  {/* <Link to="/about-us/about-iqac" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>NBA Accreditations</Link><br /> */}
  <Link to="/about-pcoi" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>Pharmacy Council of India</Link><br />
  {/* <Link to="/about-us/about-iqac" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>PBAS New Format</Link><br /> */}
  {/* <Link to="/about-us/about-iqac" className="nav-link"><span role="img" aria-label="pointing-finger" className="blinking-text">👉🏻</span>PBAS New Format – MS-WORD Document</Link> */}
          </ul>
          </div>
        </div>
        <div className="NewsAndEventsContainer">
          {/* <NewsandEvents className="NewsandEvents" /> */}
          <Scrollbar className="Scrollbar" />
        </div>
      </div>

      <UpdatePanel />
      
      <div className="iqacMessageContainer">
        {/* IQAC Message */}
        <div className="iqacMessage">
          <p><b>IQAC Message </b></p>
          <p>
            "To ensure quality culture as the prime concern for the Higher Education Institutions through institutionalizing and internalizing all the initiatives taken with internal and external support.""
          </p>
          <p className="signature">Dr. K. Chandra Bhushana Rao<br />IQAC Coordinator</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
