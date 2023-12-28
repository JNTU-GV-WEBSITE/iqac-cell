import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
// import Typography from "@mui/material/Typography";

function Home() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Internal Quality Assurance Cell [IQAC]</div>

        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          <hr />
          {/* Profile description */}
          
          <ul>
      <Link to="/about-iqac" className="nav-link">👉🏻About IQAC</Link><br />
      <Link to="/about-jntugv" className="nav-link">👉🏻About JNTU-GV</Link><br />
      <Link to="/about-iiqa" className="nav-link">👉🏻Institutional Information for Quality Assessment(IIQA)</Link><br />
      <Link to="/about-naac" className="nav-link">👉🏻NAAC Criteria</Link><br />
      <Link to="/about-ssr" className="nav-link">👉🏻NAAC Self Study Report(SSR)</Link><br />
      <Link to="/about-rewards" className="nav-link">👉🏻Faculty Awards</Link><br />
      <Link to="/about-acts" className="nav-link">👉🏻The JNTU-GV University Act & Statuses</Link><br />
      <Link to="/about-vision&mission" className="nav-link">👉🏻The JNTU-GV University Vision & Mission</Link><br />
      <Link to="/about-policies" className="nav-link">👉🏻The JNTU-GV Research Policy & Guidelines</Link><br />
      <Link to="/about-code-of-conduct" className="nav-link">👉🏻Code of Conduct</Link><br />
      <Link to="/about-syllabus" className="nav-link">👉🏻Syllabus</Link><br />
      <Link to="/about-feedback-details" className="nav-link">👉🏻Feedback Details of Curriculum</Link><br />
      <Link to="/about-AQSR" className="nav-link">👉🏻Annual Quality Assurance Report</Link><br />
      <Link to="/about-consultancy-services" className="nav-link">👉🏻Rules for Consulytancy Services</Link><br />
      <Link to="/about-constitution" className="nav-link">👉🏻Constitution of IQAC</Link><br />
      <Link to="/about-approvals" className="nav-link">👉🏻AICTE Approvals</Link><br />
      <Link to="/about-NBA" className="nav-link">👉🏻NBA Accreditations</Link><br />
      <Link to="/about-pharmacy-coi" className="nav-link">👉🏻Pharmacy Council of India</Link><br />
      <Link to="/about-PBAS" className="nav-link">👉🏻PBAS new format</Link><br />
      <Link to="/about-PBAS-newformat" className="nav-link">👉🏻PBAS new format--MS-WORD document</Link>
      </ul>

        </div>
      </div>
    </div>
  );
}

export default Home;
