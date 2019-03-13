import React from 'react';
import '../style.css';
import { frontend, myProjectBuod, myProjectElyza, myProjectYelpCamp, navbarLogo, headerLogo} from '../../assets/imgs/index';

import { faDatabase, faTools } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
    return (
        <div>
        <div id="nav-header-and-skills-container">
            <section id="nav-header">
                    <div id="nav-header-container">
                        <img src={navbarLogo} alt="logo"/>
                        <nav>
                            <ul>
                                <a href="#my-skills"><li>My Skills</li></a>
                                <a href="#my-projects"><li>My Projects</li></a>
                                <a href="#about-me"><li>About Me</li></a>
                                <a href="#about-me"><li>Contact</li></a>
                            </ul>
                        </nav>
                    </div>
            
            </section>
            
            <section id='my-skills'>
                <div id="my-skills-div">
                    <div id='my-skills-description'>
                        <h2>My Skills</h2>
                        <p>I always try to be the best version of myself through self learning. I can also adapt to any kind of environment and can easily absorb the soft skills and technical skills needed for any required task.</p>
                    </div>
                    <div id='my-skills-box-grid'>
                        <div>
                            <img src={frontend} alt="skills-logo"/>
                            <h3>Front-End Development</h3>
                            <ul>
                                <li>HTML / CSS</li>
                                <li>JavaScript</li>
                                <li>React.JS / React Native</li>
                            </ul>                    
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faDatabase} size="3x"/>
                            <h3>Back-end Development</h3>
                            <ul>
                                <li>MySql</li>
                                <li>Oracle DB</li>
                                <li>Mongo DB</li>
                                <li>Node.JS</li>
                            </ul>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTools} size="3x"/>
                            <h3>Development Environment</h3>
                            <ul>
                                <li>Git</li>
                                <li>Heroku</li>
                                <li>Chrome Dev Tools</li>
                                <li>Visual Studio Code</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
        
        <section id="my-projects">
            <div>
                <div id="my-projects-header">
                    <h2>My Projects</h2>
                    <p>Shown below are the projects I have worked on as a project in school or just for showcasing my existing knowledge.</p>
                </div>
                <div id="my-projects-grid">
                    <div>
                        <a href="http://www.buodph.com/">
                            <img src={myProjectBuod} alt="my-projects-preview" />
                        </a>
                    </div>
                    <div>
                        <a href="http://www.elyzapaulite.tk/">
                            <img src={myProjectElyza} alt="my-projects-preview" />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/linead96/YelpCamp.git">
                            <img src={myProjectYelpCamp} alt="my-projects-preview" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    
        <section id="about-me">
            <div>
                <h2>About Me</h2>
                <p>Get To Know Me More</p>
                <div id="about-me-social-links-div">
                    <a href="https://www.linkedin.com/in/daniel-garbosa-b39477120/"><FontAwesomeIcon icon={faLinkedin} size="4x"/></a>
                    <a href="https://github.com/linead96"><FontAwesomeIcon icon={faGithubSquare} size="4x" /></a>
                    <a href="https://www.instagram.com/dalandan.juice"><FontAwesomeIcon icon={faInstagram} size="4x"/></a>
                </div>
                <a href="https://drive.google.com/open?id=12DPyt1Xy_8luw9wXzP9PgSa2jhmltk0Z"><button>Download Resume</button></a>
            </div>
        </section>
    
        <section id="footer">
            <div>
                <img src={headerLogo} alt="footer-logo"/>
                <p>danielgarbosa.tech</p>
            </div>
        </section>
    </div>
    )
}

export default Home;
