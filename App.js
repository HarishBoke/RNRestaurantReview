/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import styles from './src/assets/styles/style.style';

import AppHeader from './src/components/AppHeader';
import RestaurantList from './src/components/RestaurantList';

const App: () => React$Node = () => (
  <>
    {/* take care on notch and topbar visible , full height*/}
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <AppHeader />
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <RestaurantList />
      </ScrollView>
    </SafeAreaView>
  </>
);

export default App;
