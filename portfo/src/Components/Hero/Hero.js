import React from 'react';
import profile from '../assets/Profile.png';  
import './Hero.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
    const [typeEffect] = useTypewriter({
        words: ['Frontend Enthusiast', 'Tech Lover', 'Team Player', 'Gamer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    });

    return (
        <section>
            <div className="main-container">
                <div className="image">
                    <img src={profile} alt="Profile Image" />
                </div>
                <div className="content">
                    <h1 className="electrolize-regular">
                        Hey, I'm <br /><span className="silkscreen-regular">Shlok Shinde</span>
                    </h1>
                    <h1 className="doto-uniquifier">
                        I'm a <span className="doto-uniquifier">{typeEffect}</span><Cursor />
                    </h1>
                </div>
            </div>
            <div className="paragraph-container">
                <div className="about-me-card">
                    <h2>About Me</h2>
                    <p className="electrolize-regular">
                    Hey there! I'm a 21-year-old college student pursuing a B.E in IT. I love dabbling in programming languages and web development, and I’m constantly exploring new technologies to enhance my skill set. From building responsive websites to experimenting with JavaScript frameworks, I’m always eager to learn and grow.
                    <br/>I have a passion for problem-solving, and I thrive in collaborative environments where I can work with others to create innovative solutions. Whether it's coding, designing user interfaces, or brainstorming new ideas, I am always excited to dive into new challenges.
                    <br/>When I'm not coding, you can find me gaming or reading up on the latest tech trends.<br/>Let’s connect and make something amazing together
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
