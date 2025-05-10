// Footer.js
import React from 'react';
import '../Css/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Dugain Clarence</p>
        
        <div className="footer-socials">
          <a href="https://github.com/konchu974" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <a href="www.linkedin.com/in/clarence-dugain-046097208" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="mailto:dugain.c@outlook.com" aria-label="Email">
            Email
          </a>
        </div>

        <p className="footer-small">Made with ❤️ using React</p>
      </div>
    </footer>
  );
};

export default Footer;