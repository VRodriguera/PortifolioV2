import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navegation from '../Components/Navegation';

class Header extends Component {
  render() {
    return (
      <div>
      <header className="home-header">
        <Navegation />
        <nav>
          <Link className='navegacao' to="/">Inicio</Link>
          <span>|</span>
          <Link className='navegacao' to="/projects">Projetos</Link>
        </nav>
      </header>
      </div>
    );
  }
}

export default Header;