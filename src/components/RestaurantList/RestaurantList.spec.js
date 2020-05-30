import React from 'react';
import {shallow} from 'enzyme';
import Immutable from 'immutable';

import RestaurantList from './RestaurantList';

const restaurants = Immutable.fromJS([
  {name: 'React Cafe', address: '123, Main street'},
  {name: 'React Native Garden', address: '098, North Main street'},
]);
const restaurantSearch = 'React Cafe';

const initApp = (overrides) => {
  const mockProps = {restaurants, restaurantSearch};
  const mockMethods = {};

  const wrapper = shallow(
    <RestaurantList {...mockMethods} {...mockProps} {...overrides} />,
  );

  return {mockMethods, mockProps, wrapper};
};

describe('Component: RestaurantList', () => {
  describe('rendering RestaurantList', () => {
    it('Snapshot: should display the RestaurantList', async () => {
      const {wrapper} = initApp();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
