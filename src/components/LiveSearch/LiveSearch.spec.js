import React from 'react';
import {shallow} from 'enzyme';

import LiveSearch from './LiveSearch';

const initApp = () => {
  const wrapper = shallow(<LiveSearch />);
  return {wrapper};
};

describe('Component: LiveSearch', () => {
  describe('rendering LiveSearch', () => {
    it('Snapshot: should display the LiveSearch', async () => {
      const {wrapper} = initApp();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
