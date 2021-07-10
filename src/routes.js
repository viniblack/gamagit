import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Respositories from './Repositories';
import Home from './Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/repositories" component={Respositories} />
      </Switch>
    </BrowserRouter>
  )
}