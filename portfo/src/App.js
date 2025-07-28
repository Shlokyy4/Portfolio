import React from 'react';
import Navbar from './Components/Nav/TOP'; 
import MT from './Components/Hero/MT';
import PR from './Components/Projects/PR';
import Certificates from './Components/Certi/Certificates';
import Contact from './Components/Cont/Contact';
import Footer from './Components/Foot/Footer';
import './App.css'
import DockNav from './Components/Dock/DockNav';

const App = () => {
  return (
    <div className='container'>
    <Navbar />
    <MT />
    <PR />
    <Certificates />
    <Contact />
    <Footer />
    <button className="scrollTop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
    <DockNav />
    </div>
  );
};

export default App;