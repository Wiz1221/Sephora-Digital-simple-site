import React, { Component } from 'react';

import './NameField.css';

class NameField extends Component{
  constructor(props){
    super(props);
    this.state={
      empty: '',
      filled:'Flora Wong',
      typing: '',
      focusClass: '',
      submit: false
    }
  }

  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveNextProps')

    if(nextProps.submit){
      this.passInfo()
    }
  }

  passInfo = () => {
    const { empty, filled, typing} = this.state;
    this.props.storeInfo({empty, filled, typing})
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
      <div className="name-field-container component-container">
        <div className="input-field-container">
          <label htmlFor="empty">Empty Field</label>
          <div className="textbox">
            <input className="form-title-large"
                   type="text"
                   name="empty"
                   placeholder="Name"
                   onChange={this.onChange}
                   onFocus={this.onFocus}
                   onBlur={this.onBlur}/>
          </div>
        </div>
        <div className="input-field-container">
          <label htmlFor="typing">Typing Field</label>
          <div className="textbox">
            <small className="form-title-small">Name</small>
            <input className="form-text"
                   type="text"
                   name="typing"
                   autoComplete="on"
                   autoFocus
                   onChange={this.onChange}
                   onFocus={this.onFocus}
                   onBlur={this.onBlur}/>
          </div>
        </div>
        <div className="input-field-container">
          <label htmlFor="typing">Filled Field</label>
          <div className="textbox">
            <small className="form-title-small">Name</small>
            <input className="form-text"
                   type="text"
                   name="filled"
                   value={this.state.filled}
                   onChange={this.onChange}
                   onFocus={this.onFocus}
                   onBlur={this.onBlur}/>
          </div>
        </div>
      </div>
    )
  }
}

export default NameField;
