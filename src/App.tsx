import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { Grid } from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Grid className="App">
      <h3>React sample project</h3>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
    </Router>
    </Grid>
  );
}

export default App;
