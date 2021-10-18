import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    return(
      <ul>
        Restaurants Component
        {this.props.restaurants.map(restaurant =>
          <Restaurant restaurant={restaurant} key={restaurant.id} deleteRestaurant={this.props.deleteRestaurant}/>
          )}
      </ul>
    );
  }
};

export default Restaurants;