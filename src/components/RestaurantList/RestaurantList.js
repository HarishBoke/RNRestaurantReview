import React, {useState} from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';

import RestaurantRow from './RestaurantRow';

const RestaurantList = (props) => {
  const {restaurants, restaurantSearch} = props;

  // Flatlist does not support immutable
  // Known issue:: Last few restaurant entries are not visible
  return (
    <FlatList
      data={restaurants.filter((place) => {
        return (
          !restaurantSearch ||
          place.name.toLowerCase().indexOf(restaurantSearch.toLowerCase()) > -1
        );
      })}
      renderItem={({item, index}) => (
        <RestaurantRow place={item} index={index} />
      )}
      keyExtractor={(item) => item.name}
      initialNumToRender={5}
    />
  );
};
RestaurantList.propTypes = {
  restaurants: PropTypes.array,
  restaurantSearch: PropTypes.string,
};

export default RestaurantList;
