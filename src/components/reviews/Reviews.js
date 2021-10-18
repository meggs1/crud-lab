import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
    
    return (
      <ul>
        Reviews
        {associatedReviews.map(review => 
          <Review 
            review={review} 
            key={review.id} 
            deleteReview={this.props.deleteReview} 
            restaurantId={this.props.restaurantId} 
          />
        )}
      </ul>
    );
  }
};

export default Reviews;