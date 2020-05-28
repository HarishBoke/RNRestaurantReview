import React from 'react';
import {View, Text} from 'react-native';
import AppHeaderStyle from './AppHeader.style';

const AppHeader = () => (
  <View style={AppHeaderStyle.pageTitle}>
    <Text style={AppHeaderStyle.pageTitleText}>Restaurant Review</Text>
  </View>
);
export default AppHeader;
