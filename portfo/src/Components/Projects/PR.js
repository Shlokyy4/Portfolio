import React from 'react';
import './PR.css';

const PR = () => {
  const projects = [
    { title: "Internship Management System", description: "Developed using Java Swing and PostgreSQL, featuring functionalities such as user logins, Teacher Logins, and advanced filters." },
    { title: "Library Management System", description: "Developed using Python, Django, and SQL, featuring functionalities such as user login, genre-based filters, and borrowing request/Return management." },
    { title: "ECOMART : An E-Commerce Website", description: "Built using React, Node.js, Express.js, and MongoDB Atlas, featuring a Vendor Dashboard, a dedicated website for eco-friendly products and customers, advanced filters, and more." },
    { title: "Government Scheme Finder", description: "Built with Node.js, React, and Express, offering features such as profile-based search and providing relevant documents and links." },
    { title: "SafeBites - A Smart Ingredient Scanner and Health Advisor", description: "Developed SafeBite, a mobile app that scans food labels using OCR and ML to detect allergens and harmful ingredients. It cross-checks against international food safety standards (FDA, FSSAI, EFSA) and provides real-time health alerts. Built with React Native (frontend) and Flask-Python (backend). Achieved over 90% accuracy in ingredient detection across varied label formats." },
    { title: "Automatic Grass Cutter Robot using Arduino", description: "Designed and developed an autonomous grass-cutting robot using Arduino Uno and ultrasonic sensors. The system detects obstacles and adjusts its path dynamically to perform efficient grass cutting. Integrated DC motors for movement and a BLDC motor for blade rotation, powered by a 12V Li-ion battery. Implemented servo-based sensor scanning for wider detection range. Ensured energy-efficient operation and safety features. The project aimed to reduce manual effort in lawn maintenance and explore future integration with solar power and IoT-based monitoring." },
    { title: "AR_VR Walkthrough", description: "Worked on an AR/VR project titled 'AR/VR Walkthrough' as part of an internship at SIES Graduate School of Technology. Developed an immersive virtual walkthrough of the college floor, showcasing classrooms, doors, and facilities. Gained hands-on experience in augmented and virtual reality technologies, 3D modeling, and interactive environment creation." }
  ];

  return (
    <div>
      <div id="works">
        <h2 className="worksTitle"> <span className="greenAccent"> My Projects</span></h2>
        <span className="worksDesc">
          Here are some of the mini-projects and personal creations I’ve worked on.
        </span>
        <div className="worksImgs">
          {projects.map((project, index) => (
            <div className="worksImg" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PR;
