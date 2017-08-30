import React, {Component} from 'react';

import './Star.css';

class Star extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starClicked: false,
      starValue: 0,
    }
  }

  starEnter = (event) => {
    if(!this.state.starClicked){
      let stars = this.starParent.childNodes;
      for (var i = 0; i < event.target.dataset.rating ; i++) {
        stars[i].classList.remove('fa-star-o');
        stars[i].classList.add('fa-star');
      }
    }
  }

  starLeave = (event) => {
    if(!this.state.starClicked){
      let stars = this.starParent.childNodes;
      stars.forEach((star,index) => {
        star.classList.remove('fa-star');
        star.classList.add('fa-star-o');
      })
    }
  }

  starClicked = (event) => {
    this.setState({
      starValue: event.target.dataset.rating,
      starClicked: true
    })
    this.props.passStarValue( event.target.dataset.rating)
  }

  clearStar = () => {
    let stars = this.starParent.childNodes;
    stars.forEach((star,index) => {
      star.classList.remove('fa-star');
      star.classList.add('fa-star-o');
    })
    this.setState({
      starValue: 0,
      starClicked: false
    })
    this.props.passStarValue(0)
  }

  render() {
    return (
      <div className="form-group">
        <span className="star-rating" id='starImages' ref={(el)=>{ this.starParent = el;}}>
          <span className="fa fa-star-o star fa-3x"
                data-rating="1"
                onMouseEnter={this.starEnter}
                onMouseLeave={this.starLeave}
                onClick = {this.starClicked}></span>
          <span className="fa fa-star-o star fa-3x"
                data-rating="2"
                onMouseEnter={this.starEnter}
                onMouseLeave={this.starLeave}
                onClick = {this.starClicked}></span>
          <span className="fa fa-star-o star fa-3x"
                data-rating="3"
                onMouseEnter={this.starEnter}
                onMouseLeave={this.starLeave}
                onClick = {this.starClicked}></span>
          <span className="fa fa-star-o star fa-3x"
                data-rating="4"
                onMouseEnter={this.starEnter}
                onMouseLeave={this.starLeave}
                onClick = {this.starClicked}></span>
          <span className="fa fa-star-o star fa-3x"
                data-rating="5"
                onMouseEnter={this.starEnter}
                onMouseLeave={this.starLeave}
                onClick = {this.starClicked}></span>
        </span>
        <button id="starClearButton" type="submit" className="red-button-danger" onClick={this.clearStar}>Clear</button>
      </div>
    );
  }
}

export default Star
