import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={/\/projects/i} component={Projects} />
      </Switch>
    );
  }
}

export default Routes;