import React, {useState} from 'react';
import {TextInput, View, Text, LearnMoreLinks} from 'react-native';
import RestaurantListStyle from './RestaurantList.style';

const restaurants = [
  {name: 'React Cafe', address: '123, Main street'},
  {name: 'React Native Garden', address: '098, North Main street'},
  {name: 'JavaScript Stay', address: '111, South Block'},
  {name: 'CSS Cafe', address: '987, Main street'},
];
// list: use react native list
const RestaurantList = () => {
  const [restaurantSearch, setRestaurantSearch] = useState(null);
  return (
    <React.Fragment>
      <TextInput
        style={RestaurantListStyle.searchRestaurant}
        placeholder="Find Restaurant"
        onChangeText={(search) => setRestaurantSearch(search)}
        value={restaurantSearch}
      />
      <View style={RestaurantListStyle.body}>
        {restaurants
          .filter((place) => {
            return (
              !restaurantSearch ||
              place.name.toLowerCase().indexOf(restaurantSearch.toLowerCase()) >
                -1
            );
          })
          .map((place, index) => (
            <View key={place.name} style={RestaurantListStyle.sectionContainer}>
              <View style={RestaurantListStyle.flexColumn}>
                <Text style={RestaurantListStyle.sectionCount}>{`${
                  index + 1
                }. `}</Text>
                <Text style={RestaurantListStyle.sectionTitle}>
                  {place.name}
                </Text>
                <Text style={RestaurantListStyle.sectionButton}>Info</Text>
              </View>
              <View>
                <Text style={RestaurantListStyle.sectionSubTitle}>
                  {place.address}
                </Text>
              </View>
            </View>
          ))}
      </View>
      {/* <LearnMoreLinks /> */}
    </React.Fragment>
  );
};

export default RestaurantList;
