import React from 'react';
import profile from '../assets/Profile.jpg';
import './MT.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const MT = () => {
  const [typeEffect] = useTypewriter({
    words: ['Frontend Enthusiast', 'Tech Lover', 'Team Player', 'keen'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  });

  return (
    <section>
      <div className="main-container">
        <div className="image">
          <img src={profile} alt="Profile" />
        </div>
        <div className="content">
          <h1>
            Hey, I'm <br /><span>Shlok Shinde</span>
          </h1>
          <h1>
            I'm a <span>{typeEffect}</span><Cursor />
          </h1>
        </div>
      </div>
      <div className="paragraph-container">
        <div className="about-me-card">
          <h2>About Me</h2>
          <p className="electrolize-regular">
            Hey there! I'm a 21-year-old college student pursuing a B.E in IT. I love dabbling in programming languages and web development, and I’m constantly exploring new technologies to enhance my skill set. <br />
            I have a passion for problem-solving, and I thrive in collaborative environments where I can work with others to create innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MT;
