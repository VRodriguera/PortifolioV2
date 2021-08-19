import React, { Component } from 'react';
import '../App.css';

class CardProject extends Component {
  render() {
    const { url, title, description, tecs } = this.props;
    return (
      <div  className="cardProject">
        <h2>{ title }</h2>
        <br/>
        <a href={ url } target="blank">Repositorio</a>
        <br/>
        <p>{ description }</p>
        <br/>
        <h3>Tectnologias utilizadas</h3>
        <br/>
          <ul>
            {tecs && tecs.map((tec) => <li>{tec}</li>)}
          </ul>
      </div>
    );
  }
}

export default CardProject;
