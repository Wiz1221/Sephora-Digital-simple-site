import React, { Component } from 'react';

import './DateField.css';

class DateField extends Component{
  constructor(props){
    super(props);
    this.state={
      birthDay: '',
      birthMonth: '',
      birthYear: '',
      expiryDay: '',
      expiryYear: '',
      focusClass: ''
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.submit){
      this.passInfo()
    }
  }

  passInfo = () => {
    const {birthDay, birthMonth, birthYear, expiryDay, expiryYear} = this.state;
    this.props.storeInfo({birthDay, birthMonth, birthYear, expiryDay, expiryYear})
  }

  onChange = (e) => {
    let num = e.target.value.replace(/[^0-9]/gi, '')
    this.setState({ [e.target.name]: num });
  }

  onFocus = (e) => {
    e.preventDefault();
    this.setState({
      focusClass: e.target.parentElement.className
     })
    e.target.parentElement.className += " change-textbox-border";
  }

  onBlur = (e) => {
    e.target.parentElement.className = this.state.focusClass;
  }

  render(){
    return(
      <div className="date-field-container component-container">
        <div className="input-field-container">
          <label htmlFor="date-field">Date fields</label>
          <div className="inner-container">
            <div className="date-birth-container">
              <div className="date-subtitle">Date of Birth</div>
              <div className="textbox two-digit-box">
                <input className="form-title-large two-digit-input"
                       type="text"
                       name="birthDay"
                       placeholder="DD"
                       maxLength={2}
                       value={this.state.birthDay}
                       onChange={this.onChange}
                       onFocus={this.onFocus}
                       onBlur={this.onBlur}/>
             </div>
             <div className="textbox two-digit-box">
               <input className="form-title-large two-digit-input"
                      type="text"
                      name="birthMonth"
                      placeholder="MM"
                      maxLength={2}
                      value={this.state.birthMonth}
                      onChange={this.onChange}
                      onFocus={this.onFocus}
                      onBlur={this.onBlur}/>
              </div>
              <div className="textbox four-digit-box">
                <input className="form-title-large four-digit-input"
                       type="text"
                       name="birthYear"
                       placeholder="YYYY"
                       maxLength={4}
                       value={this.state.birthYear}
                       onChange={this.onChange}
                       onFocus={this.onFocus}
                       onBlur={this.onBlur}/>
               </div>
            </div>
            <div className="expiry-date-container">
              <div className="date-subtitle">Exipry Date</div>
              <div className="textbox two-digit-box">
                <input className="form-title-large two-digit-input"
                       type="text"
                       name="expiryDay"
                       placeholder="DD"
                       maxLength={2}
                       value={this.state.expiryDay}
                       onChange={this.onChange}
                       onFocus={this.onFocus}
                       onBlur={this.onBlur}/>
             </div>
             <span className="date-slash">/</span>
             <div className="textbox two-digit-box">
               <input className="form-title-large two-digit-input"
                      type="text"
                      name="expiryYear"
                      placeholder="YY"
                      maxLength={2}
                      value={this.state.expiryYear}
                      onChange={this.onChange}
                      onFocus={this.onFocus}
                      onBlur={this.onBlur}/>
            </div>
           </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DateField;
