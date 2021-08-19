import React, { Component } from 'react';
import '../App.css';
import Navegation from '../Components/Navegation';

class Footer extends Component {
  render() {
    return (
      <div className="home-footer">
        <Navegation />
        <p>Feito com por Vinicius Rodrigues utilizando React!</p>
      </div>
    );
  }
}

export default Footer;