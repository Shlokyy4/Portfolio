import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <p className="footerText">
        © {new Date().getFullYear()} <span className="greenAccent">Shlok Shinde</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
