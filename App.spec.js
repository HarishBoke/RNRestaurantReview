import React from 'react';
import {shallow} from 'enzyme';

import App from './App';

const initApp = () => {
  const wrapper = shallow(<App />);
  return {wrapper};
};

describe('Component: App', () => {
  describe('rendering', () => {
    it('should display the application', async () => {
      const {wrapper} = initApp();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
