import React, { Component } from 'react';
import './App.css';

// Components
import NameField from '../NameField/NameField';
import MultipleLine from '../MultipleLine/MultipleLine';
import Validation from '../Validation/Validation';
import AutoFormatedSpace from '../AutoFormatedSpace/AutoFormatedSpace';
import DateField from '../DateField/DateField';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-wrapper">
          <h3 className="input-fields">Input Fields</h3>

          <div className="input-wrapper">
            <NameField/>
            <MultipleLine/>
            <Validation/>
            <AutoFormatedSpace/>
            <DateField/>
            <button/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

          // <div className="title-separator"></div>
