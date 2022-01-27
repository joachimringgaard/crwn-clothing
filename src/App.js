import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';
import { Component } from 'react/cjs/react.production.min';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
)

const JacketsPage = () => (
  <div>
    <h1>JACKETS PAGE </h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
        <Route path='/shop/jackets' component={JacketsPage} />

      </Switch>
    </div>
  );
}

export default App;
