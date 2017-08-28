import React, { Component } from 'react';

import './MultipleLine.css';

class MultipleLine extends Component{
  constructor(props){
    super(props);
    this.state = {
      multi:'Flora Wong has written a really long product review and this extends to many many lines such as this paragraph that you are reading now. KC also just broke ZY’s umbrella as I type. Hello, welcome to Sephora!'
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return(
      <div className="multiple-line-container">
        <div className="input-field-container">
          <label htmlFor="input-multiple-line">Input filed with multiple lines</label>
          <div className="textbox-multi textbox">
            <small className="form-title-small">Name</small>
            <textarea className="form-text-copy"
                      type="text"
                      name="multi"
                      rows={3}
                      placeholder="type here"
                      value={this.state.multi}
                      onChange={this.onChange}/>
          </div>
        </div>
      </div>
    )
  }
}

export default MultipleLine;
