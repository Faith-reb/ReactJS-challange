import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
