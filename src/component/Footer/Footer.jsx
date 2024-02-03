import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    
      <div className="footer">
        <div className="sizefoot">
          <div className="Inside">  
            <div className="AboutCollege">
              <h4>College</h4>
              <div className="AC">
                <h5> About College</h5>
                <h5> Services</h5>
                <h5> Provacy Policy</h5>
                <h5>Programs</h5>
              </div>
            </div>
            <div className="GetHelp">
              <h4>Get Help</h4>
              <div className="GH">
                <h5>FAQ</h5>
                <h5>Fee</h5>
                <h5>Courses</h5>
                <h5>Activities</h5>
              </div>
            </div>
            <div className="Creator">
              <h4>Achievements</h4>
              <div className="achieve">
                <h5>College Achievement</h5>
                <h5>Awards & prizes</h5>
                <h5>Eligibity</h5>
              </div>
            </div>

            <div className="FollowUs">
              <h4>FollowUs</h4>
              <div className="IG">INSTA</div>
              <div className="IG">facebook</div>
              <div className="IG">twitter</div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Footer;
