/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import styles from './src/assets/styles/style.style';

import AppHeader from './src/components/AppHeader';
import Restaurant from './src/scenes/Restaurant';

const App: () => React$Node = () => (
  <>
    {/* take care on notch and topbar visible , full height*/}
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <AppHeader />
      {global.HermesInternal == null ? null : (
        <View style={styles.engine}>
          <Text style={styles.footer}>Engine: Hermes</Text>
        </View>
      )}
      <Restaurant />
    </SafeAreaView>
  </>
);

export default App;
