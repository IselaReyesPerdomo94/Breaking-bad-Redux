import React from 'react';
import {Home, Quotes} from './views';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App =() =>(
  <Router>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route exact path="/quotes"><Quotes/></Route>
    </Switch>
  </Router>
)

export default App;
