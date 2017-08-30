import React, { Component } from 'react';

import './Validation.css';
import errorPic from '../../assets/error.png';
import tick from '../../assets/tick.png';

class Validation extends Component{
  constructor(props){
    super(props);
    this.state = {
      userInputted: false,
      email:'',
      emailValid:'',
      emailError: false,
      errorClass: ' validation-error',
      errorClassInnerText: ' form-text-error-red',
      focusClass:''
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.submit){
      this.passInfo()
    }
  }

  passInfo = () => {
    const { email} = this.state;
    this.props.storeInfo({email})
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value,});

  }

  onFocus = (e) => {
    e.preventDefault();
    this.setState({ focusClass: e.target.parentElement.className })
    e.target.parentElement.className += " change-textbox-border";
  }

  // when user leaves this input box, check for valid email, and attach original className
  onBlur = (e) => {
    this.setState({userInputted: true})
    e.target.parentElement.className = this.state.focusClass;

    // check if email have @ and .com (simple presumption that all emails have .com)
    let trigger = e.target.value.indexOf('@')<0 || e.target.value.indexOf('.com')<0 ;

    // if @ or .com cannot be found, set state emailError is true
    trigger? this.setState({ emailError: true }): this.setState({ emailError: false })
  }

  render(){
    const {emailError, errorClass, errorClassInnerText, userInputted} = this.state;
    let img = null;
    let msg = null;
    // check if user have clicked on this input box before
    if(userInputted){
      // if user have left the box without @ and .com then render the following elements
      if(emailError){
        img = (<img className="side-pic error" src={errorPic} alt="error-pic"/>);
        msg = (<small className="form-text-error">Error: Please enter a valid email address.</small>);
      }else{
        img = (<img className="side-pic tick" src={tick} alt="tick-pic"/>);
        msg = null;
      }
    }

    return(
      <div className="validation-container component-container">
        <div className="input-field-container">
          <label htmlFor="validation">Validation</label>
          <div className={emailError? "textbox" + errorClass: "textbox"}>
            <small className={emailError? "form-title-small" + errorClassInnerText: "form-title-small"}>Email</small>
            <input className="form-text"
                   type="email"
                   name="email"
                   value={this.state.email}
                   onChange={this.onChange}
                   onFocus={this.onFocus}
                   onBlur={this.onBlur}/>
            {img}
          </div>
          {msg}
        </div>
      </div>
    )
  }
}

export default Validation;
