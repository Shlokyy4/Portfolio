import React from 'react';
import Navbar from './Components/Nav/TOP'; 
import MT from './Components/Hero/MT';
import PR from './Components/Projects/PR';
import Certificates from './Components/Certi/Certificates';
import Contact from './Components/Cont/Contact';
import Footer from './Components/Foot/Footer';
import './App.css'

const App = () => {
  return (
    <div className='container'>
    <Navbar />
    <MT />
    <PR />
    <Certificates />
    <Contact />
    <Footer />
    </div>
  );
};

export default App;