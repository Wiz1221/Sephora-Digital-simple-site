import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS
import './Rate.css';

// Component
import Star from '../Star/Star';

// Database
import {firebaseDB} from '../../firebase';

class Rate extends Component {
  constructor(props){
    super(props);
    this.state = {
      star: 0
    }
  }

  // getting the number of stars from Star component and store in local state
  passStarValue = (noOfStar) => {
    this.setState({
      star: noOfStar
    })
  }

  // saving examiner's rating in my database
  onClick = () => {
    firebaseDB.ref('/rate').push(this.state.star)
  }

  render() {
    return (
      <div className="rate-wrapper">
        <h2 className="rate-title">Please rate this code challenge</h2>
        <Star passStarValue={this.passStarValue}/>
        <div className="rate-button-wrapper">
          <button className="submit-rate"
                  type="submit"
                  name="submit"
                  onClick={this.onClick}>Submit</button>
          <Link to="/">
            <button className="back-rate"
                    type="submit"
                    name="back">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Rate;
