import React, { useEffect, useState } from 'react';
import './DockNav.css';

const DockNav = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`nav-bottom ${visible ? 'visible' : ''}`}>
      <div className="nav-container">
        <div className="nav-links">
          <a className="nav-item" href="#hero">Home</a>
          <a className="nav-item" href="#works">Projects</a>
          <a className="nav-item" href="#certificates">Certificates</a>
          <a className="nav-item" href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default DockNav;
