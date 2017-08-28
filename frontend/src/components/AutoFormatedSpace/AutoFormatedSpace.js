import React, { Component } from 'react';

import './AutoFormatedSpace.css';

class AutoFormatedSpace extends Component{
  constructor(props){
    super(props);
    this.state={
      creditCardNumber: ''
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  formatSpace = (value) => {
    // replace all non-digits with ''
    var v = value.replace(/[^0-9]/gi, '')
    var parts = [];
    // store each strings of length 4 of value into parts
    for (var i = 0; i < v.length ; i += 4) {
        parts.push(v.substring(i, i+4))
    }
    // join each string with space in between
    return parts.join(' ')
  }

  render(){
    const showNumber = this.formatSpace(this.state.creditCardNumber);
    return(
      <div className="auto-formated-space-container">
        <div className="input-field-container">
          <label htmlFor="auto-formated-space">Input field with auto-formatted spaces</label>
          <div className="textbox">
            <input className="form-title-large creditcard" type="text" name="creditCardNumber" value={showNumber} onChange={this.onChange}/>
          </div>
        </div>
      </div>
    )
  }
}

export default AutoFormatedSpace;
