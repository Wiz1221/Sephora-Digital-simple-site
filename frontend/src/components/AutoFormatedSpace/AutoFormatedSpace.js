import React, { Component } from 'react';

import './AutoFormatedSpace.css';

class AutoFormatedSpace extends Component{
  constructor(props){
    super(props);
    this.state={
      creditCardNumber: '',
      focusClass: ''
    }
  }

componentWillReceiveProps(nextProps){
  if(nextProps.submit){
    this.passInfo()
  }
}

passInfo = () => {
  const {creditCardNumber} = this.state;
  this.props.storeInfo({creditCardNumber})
}

  onChange = (e) => {
    this.setState({ [e.target.name]: this.formatSpace(e.target.value) });
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

  onFocus = (e) => {
    e.preventDefault();
    this.setState({ focusClass: e.target.parentElement.className })
    e.target.parentElement.className += " change-textbox-border";
  }

  onBlur = (e) => {
    e.target.parentElement.className = this.state.focusClass;
  }

  render(){
    return(
      <div className="auto-formated-space-container component-container">
        <div className="input-field-container">
          <label htmlFor="auto-formated-space">Input field with auto-formatted spaces</label>
          <div className="textbox">
            <input className="form-title-large creditcard"
                   type="text"
                   name="creditCardNumber"
                   value={this.state.creditCardNumber}
                   onChange={this.onChange}
                   onFocus={this.onFocus}
                   onBlur={this.onBlur}/>
          </div>
        </div>
      </div>
    )
  }
}

export default AutoFormatedSpace;
