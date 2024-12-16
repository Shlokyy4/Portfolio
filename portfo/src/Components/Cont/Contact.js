import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing the icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_7uu86fo', 
        'best_f99334a', 
        formData,
        '2eu9jzn--YQzGSmdU' 
      )
      .then(
        () => {
          setStatusMessage('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatusMessage('Failed to send message. Please try again later.');
          console.error(error);
        }
      );
  };

  return (
    <div id="contact">
      <h2 className="contactTitle">
        <span className="greenAccent">Contact Me</span>
      </h2>
      <span className="contactDesc">
        Feel free to reach out to me by filling out the form below.
      </span>
      <form className="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
        {statusMessage && <p className="statusMessage">{statusMessage}</p>}
      </form>

      
      <div className="socialLinks">
        <a
          href="https://github.com/Shlokyy4" 
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/shlok-538844249/" 
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
