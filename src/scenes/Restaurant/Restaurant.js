import React, {useState} from 'react';
import RestaurantList from '../../components/RestaurantList';
import LiveSearch from '../../components/LiveSearch';
import Immutable from 'immutable';

const getRestaurantList = () => {
  const restaurants = [
    {name: 'React Cafe', address: '123, Main street'},
    {name: 'React Native Garden', address: '098, North Main street'},
    {name: 'JavaScript Stay', address: '111, South Block'},
    {name: 'CSS Cafe', address: '987, Main street'},
    {name: 'qReact Cafe', address: '123, Main street'},
    {name: 'qReact Native Garden', address: '098, North Main street'},
    {name: 'qJavaScript Stay', address: '111, South Block'},
    {name: 'qCSS Cafe', address: '987, Main street'},
    {name: '1qReact Cafe', address: '123, Main street'},
    {name: '1qReact Native Garden', address: '098, North Main street'},
    {name: '1qJavaScript Stay', address: '111, South Block'},
    {name: '1qCSS Cafe', address: '987, Main street'},
  ];
  return restaurants;
};

const Restaurant = () => {
  const restaurants = getRestaurantList();
  const [restaurantSearch, setRestaurantSearch] = useState(null);
  return (
    <React.Fragment>
      <LiveSearch setRestaurantSearch={setRestaurantSearch} />
      <RestaurantList
        restaurants={Immutable.fromJS(restaurants)}
        restaurantSearch={restaurantSearch}
      />
    </React.Fragment>
  );
};
export default Restaurant;
