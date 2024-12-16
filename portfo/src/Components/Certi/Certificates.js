import React from 'react';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    { 
      title: "X-PLOIT'ATHON Certificate", 
      date: "Issued: October 2024", 
      link: "https://drive.google.com/file/d/1RsDzT-hA_mU_l9eAysuph4zWWTqmlo11/view?usp=sharing" 
    },
    { 
      title: "Python and Django Full Stack Web Developer", 
      date: "Issued: April 2024", 
      link: "https://drive.google.com/file/d/1WG_i2Zhkep75YluNhdA4oey4JFJxkgIM/view?usp=sharing" 
    },
    { 
      title: "Mastering C++ Language", 
      date: "Issued: April 2024", 
      link: "https://drive.google.com/file/d/1A8jMIclaXX03EiT5qs-suoPbzuSNWFNc/view?usp=sharing" 
    },
    { 
      title: "Augmented Reality Internship", 
      date: "Issued: January-March 2024", 
      link: "https://drive.google.com/file/d/1J1deXoWmwaqeX6ZtV51QiIhrfIHfOrhh/view?usp=sharing" 
    },
    { 
      title: "AWS Academy Graduate", 
      date: "Issued: October 2024", 
      link: "https://drive.google.com/file/d/1wqJfQCNnGToJbG2nrARJ8ZDMiql8kFJM/view?usp=sharing" 
    },
    { 
      title: "Google Developer Student Clubs Completion Certificate", 
      date: "Issued: May 2024", 
      link: "https://drive.google.com/file/d/1jMIALqUVVilzcNv9LerGFXvNntJEl-Av/view?usp=sharing" 
    },
    { 
      title: "Institution of Electronics and Telecommunication Engineers Completion Certificate", 
      date: "Issued: May 2024", 
      link: "https://drive.google.com/file/d/1EETFlmH8OPQxLJMIiHbBdqS820gLaqVA/view?usp=sharing" 
    },
  ];

  return (
    <div id="certificates">
      <h2 className="certificatesTitle"> <span className="greenAccent"> My Certificates</span></h2>
      <span className="certificatesDesc">
        Below is a collection of certifications I've earned during my learning journey. <br />
        <span className="clickPrompt">Click on a certificate to view it.</span>
      </span>
      <div className="certificatesList">
        {certificates.map((certificate, index) => (
          <a 
            className="certificateItem" 
            href={certificate.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            key={index}
          >
            <h3>{certificate.title}</h3>
            <p>{certificate.date}</p>
            <span className="hoverText">Click to view certificate</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
