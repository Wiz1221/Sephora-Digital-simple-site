import React, { Component } from 'react';

import './InputFieldContainer.css';

class InputFieldContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      filled:''
    }
  }

  render(){
    return(
      <div className="input-field-container">
        <label htmlFor={this.props.labelFor}>{this.props.label}</label>
        <div className="textbox">
          {this.props.}<div className="form-title-large">Name</div>
        </div>
      </div>
    )
  }

  export default InputFieldContainer;
