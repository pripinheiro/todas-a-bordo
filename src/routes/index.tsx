import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Mission from '../pages/Mission';
import Contact from '../pages/Contact';

const Routes: React.FC = () => (
  <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/mission" component={Mission} exact />
      <Route path="/contact" component={Contact} exact />
  </Switch>
);

export default Routes;
