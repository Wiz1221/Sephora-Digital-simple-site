import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

// Components
import NameField from '../NameField/NameField';
import MultipleLine from '../MultipleLine/MultipleLine';
import Validation from '../Validation/Validation';
import AutoFormatedSpace from '../AutoFormatedSpace/AutoFormatedSpace';
import DateField from '../DateField/DateField';

// Database
import firebase from '../../firebase';

// CSS
import './Home.css';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      submit: false,
      form:{}
    }
  }

  // Submit button is clicked
  onClick = (e) => {
    this.setState({ submit: true });
  }

  // each component will pass their local state to Home component via this function
  storeInfo = (data) => {
    let newForm = this.state.form;
    // adding the properties from each components into the main form in this component
    for(var prop in data){
      newForm[prop] = data[prop]
    }
    // saving the new form in local state and set submit to false so that child components will not call this function indefinitely
    this.setState({ form: newForm, submit: false })
  }

  componentDidUpdate(){
    // form was updated and submit was set to false, save the form in database
    if(!this.state.submit){
      firebase.database().ref('form/').push(this.state.form)
    }
    window.location.href = "/rate";
  }

  // I was trying to go for separate components of each type of input fields
  // so that they can be simply imported into other components when the project scales.
  // all child components uses the same way to pass info to parent so that it is easier to manage the import
  // personal opinion, not sure if correct practice, really appreciate enlightenment
  render() {
    return (
      <div className="App">
        <div className="main-wrapper">
          <h3 className="input-fields">Input Fields</h3>
          <div className="input-wrapper">
            <NameField submit={this.state.submit} storeInfo = {this.storeInfo}/>
            <MultipleLine submit={this.state.submit} storeInfo = {this.storeInfo}/>
            <Validation submit={this.state.submit} storeInfo = {this.storeInfo}/>
            <AutoFormatedSpace submit={this.state.submit} storeInfo = {this.storeInfo}/>
            <DateField submit={this.state.submit} storeInfo = {this.storeInfo}/>

              <button className="submit-home" type="submit" onClick={this.onClick}>Submit</button>

          </div>
        </div>
      </div>
    );
  }
}

// this is a show of my understanding in using redux
// redux was not used in this challenge as there wasn't much flow of information here (only 1 parent and direct childrens)
// exposing global state to this component by attaching to this.props and component will rerender
const mapStateToProps = (state) => {
  return {

  }
}
// exposing actions to component by attaching methods to this.props
const mapDispatchToProps = (dispatch) => {
  return {
    // example: (data) => { dispatch(exampleAction(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
