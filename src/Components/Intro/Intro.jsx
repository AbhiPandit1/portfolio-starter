import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';

const Intro = () => {
    
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am </span>
          <span>Abhishek Jha</span>
          <span>
            Full Stack Developer who loves problem Solving and designing New
            Things with quality codes
          </span>
        </div>
        <div>
          <button className="i-button button">Contact me</button>
          <a href="https://drive.google.com/file/d/16l55BQZZN4fziMlgvYJIldta_qjXEvj_/view">
            <button className="i-button button">Download CV</button>
          </a>
        </div>

        <div className="i-icon">
          <a href="https://github.com/AbhiPandit1">
            <img src={Github} alt="" />
          </a>

          <a href="http://linkedin.com/in/abhishek-jha-087a761a8">
            <img src={Linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/abhishek1008/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        
        

        

       
       
      </div>
    </div>
  );
};

export default Intro;
