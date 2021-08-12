import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with{' '}
        <span className="Footer__Heart">&hearts;</span> by{' '}
        <a
          href="https://github.com/PranayPandey4"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Pranay Pandey
        </a>
      </section>
    </footer>
  );
};

export default Footer;
