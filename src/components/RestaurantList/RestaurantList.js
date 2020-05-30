import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import RestaurantListStyle from './RestaurantList.style';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

const RestaurantRow = (place, index) => (
  <View key={place.get('name')} style={RestaurantListStyle.sectionContainer}>
    <View style={RestaurantListStyle.flexColumn}>
      <Text style={RestaurantListStyle.sectionCount}>{`${index + 1}. `}</Text>
      <Text style={RestaurantListStyle.sectionTitle}>{place.get('name')}</Text>
      <Text style={RestaurantListStyle.sectionButton}>Info</Text>
    </View>
    <View>
      <Text style={RestaurantListStyle.sectionSubTitle}>
        {place.get('address')}
      </Text>
    </View>
  </View>
);
// list: use react native list
const RestaurantList = (props) => {
  const {restaurants, restaurantSearch} = props;
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={RestaurantListStyle.scrollView}>
      <View style={RestaurantListStyle.body}>
        {restaurants
          .filter((place) => {
            return (
              !restaurantSearch ||
              place
                .get('name')
                .toLowerCase()
                .indexOf(restaurantSearch.toLowerCase()) > -1
            );
          })
          .map((place, index) => RestaurantRow(place, index))}
      </View>
    </ScrollView>
  );
};
RestaurantList.propTypes = {
  restaurants: ImmutablePropTypes.list,
  restaurantSearch: PropTypes.string,
};

export default RestaurantList;
