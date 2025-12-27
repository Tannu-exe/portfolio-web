import "./Footerstyle.css";
import React from 'react';
import {FaHome, FaPhone,FaMailBulk, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
            <FaHome size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
            <p>Samastipur,Bihar,India.</p>
            </div>
            <div className="phone">
              <h4>
            <FaPhone size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
            6284668913
            </h4>
            </div>
            <div className="email">
              <h4>
            <FaMailBulk size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
            tannuk8922@gmail.com
            </h4>
            </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is me Tannu Kumari.I am final year student.I want to secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company.</p>
                <div className="social">
                <a  href="https://www.linkedin.com/in/tannukumari78/">
                <FaLinkedin size={30}  style={{color:"#fff" ,marginRight:"1rem"}}/>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer