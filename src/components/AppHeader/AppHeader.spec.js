import React from 'react';

import {shallow} from 'enzyme';

import AppHeader from './AppHeader';

const initWrapper = (overrides) => {
  const mockMethods = {};

  const mockProps = {};

  const wrapper = shallow(
    <AppHeader {...mockMethods} {...mockProps} {...overrides} />,
  );

  return {mockMethods, mockProps, wrapper};
};

describe('AppHeader', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<AppHeader label="test label" />);
      expect(component).toMatchSnapshot();
    });
  });
});
