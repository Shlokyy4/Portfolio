import React from 'react';
import './PR.css';

const PR = () => {
  const projects = [
    { title: "Internship Management System", description: "Developed using Java Swing and PostgreSQL, featuring functionalities such as user logins, Teacher Logins, and advanced filters." },
    { title: "Library Management System", description: "Developed using Python, Django, and SQL, featuring functionalities such as user login, genre-based filters, and borrowing request/Return management." },
    { title: "ECOMART : An E-Commerce Website", description: "Built using React, Node.js, Express.js, and MongoDB Atlas, featuring a Vendor Dashboard, a dedicated website for eco-friendly products and customers, advanced filters, and more." },
    { title: "Government Scheme Finder", description: "Built with Node.js, React, and Express, offering features such as profile-based search and providing relevant documents and links." },
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
