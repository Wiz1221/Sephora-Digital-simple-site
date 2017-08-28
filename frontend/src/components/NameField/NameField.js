import React, { Component } from 'react';

import './NameField.css';

class NameField extends Component{
  constructor(props){
    super(props);
    this.state={
      filled:'Flora Wong',
      typing:''
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render(){

    return(
      <div className="name-field-container">
        <div className="input-field-container">
          <label htmlFor="empty">Empty Field</label>
          <div className="textbox">
            <div className="form-title-large">Name</div>
          </div>
        </div>
        <div className="input-field-container">
          <label htmlFor="typing">Typing Field</label>
          <div className="textbox">
            <small className="form-title-small">Name</small>
            <input className="form-text" type="text" name="typing" autoComplete="on" autoFocus onChange={this.onChange}/>
          </div>
        </div>
        <div className="input-field-container">
          <label htmlFor="typing">Filled Field</label>
          <div className="textbox">
            <small className="form-title-small">Name</small>
            <input className="form-text" type="text" name="filled" value={this.state.filled} onChange={this.onChange}/>
          </div>
        </div>
      </div>
    )
  }
}

export default NameField;

// <div className="textbox">
//   <input type="text" name="empty"  placeholder="Name" disabled/>
// </div>
