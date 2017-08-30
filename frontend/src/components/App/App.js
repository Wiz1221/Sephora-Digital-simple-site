import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Static files
import './App.css';

// Components
import Home from '../Home/Home';
import Rate from '../Rate/Rate';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/rate" component={Rate}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
