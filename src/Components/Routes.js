import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={/\/about/i} component={About} />
        <Route exact path={/\/contact/i} component={Contact} />
        <Route exact path={/\/projects/i} component={Projects} />
      </Switch>
    );
  }
}

export default Routes;