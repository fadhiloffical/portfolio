import React, { useState } from "react";
import classes from "./About.module.css";

import abstract from "../../assets/img/abstract.png"

import "./Button.css";

import { Col,Container,Row } from 'react-bootstrap';

import fb from '../../assets/img/fb.png';
import git from '../../assets/img/git.png';
import ig from '../../assets/img/ig.png';
import li from '../../assets/img/li.png';

 const About = () => {

   const [showViewStory, setShowViewStory] = useState(true);

   const [showOtherSkills, setShowOtherSkills] = useState(true);

   let otherSkills;
   let story;
		{showViewStory ? story = (
                     <>
                     <div className="aboutWrapper">
                     <Container>
                     <Row lg={12}>
                        {/* left text */}
                           <Col xl={7}>
                              <h2 className="section-title">Hello <span className={classes.aboutSpanColor}>,</span></h2>
                                 <p>I'm <span className={classes.aboutSpanColor}>Fadhil Asharaf</span> Developer & Designer currently working as Full Stack Developer. 
                                 <br />
                                 New experiences and challenges are my thing. 
                                 <br />
                                 If you have any cool projects or opportunities, get in touch!
                                 <br />  <br />  Looking for a great opportunity where I can contribute towards upcoming technology innovations and manage key projects that impact the organization as well, as broaden my scope of learning.</p>
                                 <ul className="social">
                                    <li>
                                       <a href="https://github.com/fadhil-sweans" target="_blank" rel="noopener noreferrer">
                                          <img src={git} alt="Github" />
                                       </a>
                                    </li>
                                    <li>
                                       <a href="https://www.linkedin.com/in/fadhil-asharaf/" target="_blank" rel="noopener noreferrer">
                                          <img src={li} alt="LinkedIn" />
                                       </a>
                                    </li>
                                    <li>
                                       <a href="https://www.instagram.com/cyber_bone/" target="_blank" rel="noopener noreferrer">
                                          <img src={ig} alt="Instagram" />
                                       </a>
                                    </li>
                                    <li>
                                       <a href="https://www.facebook.com/fadhilonly" target="_blank" rel="noopener noreferrer">
                                          <img src={fb} alt="Facebook" />
                                       </a>
                                    </li>
                                 </ul>
                           </Col>
                           <Col xl={5}>
                              <div className="abstractWrapper">
                                 <img src={abstract} className="about-image" alt="Globe" />
                              </div>
                           </Col>
                     </Row>
                     </Container>
                     <button onClick={()=>setShowViewStory(!showViewStory)} className="slide left">&nbsp;</button>
                     </div>
                     </>
						 ) : 
					story = (
						<>
                  <div className="aboutWrapper">
                     <Container>
                     <Row lg={12}>
                        {/* left text */}
                        {showOtherSkills ? otherSkills = (
                                       <>
                                       <Col xl={7}>
                                             <h2 className="section-title">Skills <span className={classes.aboutSpanColor2}>.</span></h2>
                                                <p className={classes.majorSkillsP}><span className={classes.aboutSpanColor1}>Major Skills</span></p>
                                                <p className={classes.majorSkillsP1}>" Technical Skill is mastery of complexity, while creativity is mastery of simplicity "</p>
                                                <ul className={classes.majorSkills}>
                                                   <li>React.js</li>
                                                   <li>Laravel</li>
                                                   <li>Wordpress Plugin Development</li>
                                                   <li>Wordpress Theme Development</li>
                                                   <li>Web & App Designing</li>
                                                   <li>Web & App  Development</li>
                                                </ul>
                                                <button onClick={()=>setShowOtherSkills(!showOtherSkills)} className="slide2 left">&nbsp;</button>
                                                
                                       </Col>
                                       </>
                                    ) : 
                                 story = (
                                    <>
                                       <Col xl={7}>
                                          <h2 className="section-title">Skills <span className={classes.aboutSpanColor2}>.</span></h2>
                                          <p className={classes.majorSkillsP1}>" Technical Skill is mastery of complexity, while creativity is mastery of simplicity "</p>
                                             <ul className={classes.majorSkills}>
                                                <li>HTML 6, SCSS & CSS 3, Bootstrap ...</li>
                                                <li>PHP, PhpMyadmin, MySQL, MariaDB, FireBase ... </li>
                                                <li>JavaScript, Jquery ..</li>
                                                <li>React Route, React Bootstrap ...</li>
                                                <li>Pyton, OpenCV, Numpy ...</li>
                                                <li>C , C++ Programming ...</li>
                                                <li>GIT</li>
                                                <li>Potoshop</li>
                                                <li>Final Cut Pro</li>
                                                <li>LaTex</li>

                                             </ul>
                                             <button onClick={()=>setShowOtherSkills(!showOtherSkills)} className="slide3 left">&nbsp;</button>
                                       </Col>
                                    </>
                           )}
                           <Col xl={5}>
                              <div className={classes.abstractWrapper}>
                                 <img src={abstract} className="about-image" alt="Globe" />
                              </div>
                           </Col>
                     </Row>
                     </Container>
                     <button onClick={()=>setShowViewStory(!showViewStory)} className="slide1 left">&nbsp;</button>
                     </div>
                     </>
          )}

      
		
   return ( 
      <>
      <div className={classes.aboutWrapper}>
         <h1>About</h1>
         {story}
      </div>
      </>
    );
 }
  
 export default About;