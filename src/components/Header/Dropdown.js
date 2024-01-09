import "./Dropdown.css";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
//import SchoolIcon from "@mui/icons-material/School";
// import PersonIcon from "@mui/icons-material/Person";
import DraftsIcon from "@mui/icons-material/Drafts";
 import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ApartmentIcon from "@mui/icons-material/Apartment";
 import DescriptionIcon from "@mui/icons-material/Description";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
// import { PiExamFill } from "react-icons/pi";

const Dropdown = () => {
  const navigate = useNavigate();

  const [menuState, setMenuState] = useState(false);

  const homeHandler = () => {
    navigate("/");
  };
 // eslint-disable-next-line no-lone-blocks
  {/*const contactHandler = () => {
    navigate("/contact-us");
  };*/}
  
  return (
    <nav className="topnav">
      <div className="menu-icon" onClick={() => setMenuState(!menuState)}>
        <MenuIcon />
        MENU
      </div>
      <div className={menuState ? "menu-on-options" : "menu-off-options"}>
        <div class="dropdown">
          <div class="dropbtn" onClick={homeHandler}>
            <div className="drop-icon" onClick={() => setMenuState(!menuState)}>
              <HomeIcon /> HOME
            </div>
          </div>
        </div>
        
     <div class="dropdown">
          <div class="dropbtn">
            <ApartmentIcon /> ABOUT 
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button >
              {" "}
              <Link className="link-btn" to="/about-us/about-iqac">
                About IQAC
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-jntugv">
                About JNTU-GV
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-director">
                About Director
              </Link>
            </button>
          </div>
       </div>

        <div class="dropdown">
          <div className="dropbtn">
          <Link to="/qat" className="drop-icon" onClick={() => setMenuState(!menuState)}>
          <GroupsIcon /> QUALITY ASSURANCE TEAM
        </Link>
          </div>
        </div>


        {/* <div class="dropdown">
          <div class="dropbtn">
            <GroupsIcon /> NIRF
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button>
              {" "}
              {/* <Link
                className="link-btn"
                to="/administration/chairpersons"
                target="_self"
              >
                Chairpersons
              </Link> 
            </button>
          </div>
        </div> */}


        <div class="dropdown">
          <div className="dropbtn">
          <Link to="/aqar" className="drop-icon" onClick={() => setMenuState(!menuState)}>
          <DraftsIcon /> AQAR
        </Link>
          </div>
        </div>

        <div class="dropdown">
          <div class="dropbtn">
            <GridViewRoundedIcon /> COURSE DETAILS 
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button >
              {" "}
              <Link className="link-btn" to="/about-course-details/about-ug-syllabus">
                UG Syllabus
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-course-details/about-pg-syllabus">
                PG Syllabus              
             </Link>
            </button>
            
          </div>
       </div>

        {/*<div class="dropdown">
          <div class="dropbtn">
            <DescriptionIcon /> NAAC DATA FILES
          </div>
          <div
            class="dropdown-content"
            onClick={() => setMenuState(!menuState)}>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="https://results.jntugv.edu.in"
                target="_blank"
              >
                Examination Results
              </Link>
            </button>
            </div>
        </div>*/}
        
        <div class="dropdown">
        <div className="dropbtn">
        <Link to="/programmes-offered" className="drop-icon" onClick={() => setMenuState(!menuState)}>
          <DraftsIcon /> PROGRAMMES OFFERED
        </Link>
      </div>
        </div>


        <div class="dropdown">
        <div className="dropbtn">
        <Link to="/reports" className="drop-icon" onClick={() => setMenuState(!menuState)}>
          <DescriptionIcon /> REPORTS
        </Link>
      </div>
        </div>
        

        <div class="dropdown">
          <div class="dropbtn">
            <DraftsIcon /> FEEDBACK FORMS
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button >
              {" "}
              <Link className="link-btn" to="/feedbackforms/faculty-form">
                Faculty
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/feedbackforms/student-form">
                Student
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/feedbackforms/alumni-form">
                Alumni
              </Link>
            </button>
          </div>

          
       </div>

      </div>
    </nav>
  );
};

export default Dropdown;