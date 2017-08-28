import React, { Component } from 'react';

import './Validation.css';
import ErrorPic from '../../assets/error.png';

class Validation extends Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      emailError: false
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value,});
    if(e.target.value.indexOf('@')<0 || e.target.value.indexOf('.com')<0){
      this.setState({ emailError: true });
    }
  }

  render(){
    let img = null;
    let msg = null;
    if(this.state.emailError){
      img = (<img className="side-pic error" src={ErrorPic} alt="error-pic"/>);
      msg = (<small className="form-text-error">Error: Please enter a valid email address.</small>);
    }
    return(
      <div className="validation-container">
        <div className="input-field-container">
          <label htmlFor="validation">Validation</label>
          <div className="textbox">
            <small className="form-title-small">Email</small>
            <input className="form-text" type="email" name="email-error" value={this.state.email} onChange={this.onChange}/>
            {img}
          </div>
          {msg}
        </div>
        <div className="input-field-container">
          <div className="textbox">
            <small className="form-title-small">Email</small>
            <input className="form-text" type="email" name="email-valid" value={this.state.email} onChange={this.onChange}/>
            {img}
          </div>
          {msg}
        </div>
      </div>
    )
  }
}

export default Validation;
