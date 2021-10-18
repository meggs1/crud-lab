import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit(e) {
    e.preventDefault()
    this.props.addReview({
      text: this.state.text,
      restaurantId: this.props.restaurantId
    })
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        Review Input
        <div>
        <form onSubmit={e => this.handleOnSubmit(e)}> 
          <input
            type="text"
            name='text'
            value={this.state.text}
            onChange={e => this.handleOnChange(e)} 
          />
          <input type="submit" />
        </form>
      </div>
      </div>
    );
  }
};

export default ReviewInput;
