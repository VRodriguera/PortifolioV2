import React, { Component } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

class Navegation extends Component {
  render() {
    return (
      <>
      <nav>
            <a
              className='navegacao'
              href="https://github.com/VRodriguera"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaGithub />
            </a>
            <a
              className='navegacao'
              href="https://www.instagram.com/vini_vr_/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaInstagram />      
            </a>
            <a
              className='navegacao'
              href="https://www.linkedin.com/in/oviniciusrodrigues/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaLinkedin />
            </a>
          </nav>
      </>
    );
  }
}

export default Navegation;