/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/screens/navigation/AppNavigator';

function App(): React.JSX.Element {

  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    // </GestureHandlerRootView>

  );
}

export default App;
