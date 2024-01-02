import React from "react";
import "./Data.css";
import Typography from "@mui/material/Typography";

function VisionMission() {
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Vision</div>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          <hr />
          {/* Profile description */}
          <p className="a"></p>
          
            ❖ To emerge as a premier technical Institution in the field of
            engineering and research with a focus to produce professionally
            competent and socially sensitive engineers capable of working in a
            multidisciplinary global environment.
          
        </div>
        <div className="allRightContentHeading">Mission</div>
        <div className="allRightContentProfile">
        <center></center>
        <hr />
  
           <p className="a"></p>
           <Typography variant="p">
           ❖ To provide high-quality technical education through a creative balance of academia and industry by adopting highly effective teaching-learning processes.
           </Typography>
           <br />
           <Typography variant="p">
           ❖ To promote multidisciplinary research with a global perspective to attain professional excellence.
           </Typography>
           <br />
           <Typography variant="p">
           ❖ To establish standards that inculcate ethical and moral values that contribute to the growth in the career and development of society.
           </Typography>
        </div>
      </div>
    </div>
  );
}

export default VisionMission;

