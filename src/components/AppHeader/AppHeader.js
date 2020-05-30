import React from 'react';
import {View, Text, Platform} from 'react-native';
import AppHeaderStyle from './AppHeader.style';

const platformPageTitleText = Platform.select({
  ios: AppHeaderStyle.iOSPageTitleText,
  android: AppHeaderStyle.pageTitleText,
});

const AppHeader = () => (
  <View style={AppHeaderStyle.pageTitle}>
    <Text style={platformPageTitleText}>Restaurant Review</Text>
  </View>
);
export default AppHeader;
