import React, { Component } from 'react';

class Habilidades extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div>
        <p className='infos'><span role="img" aria-label="Green Check Mark"> ✅</span>{ skill }</p>
      </div>
    );
  }
}

export default Habilidades;