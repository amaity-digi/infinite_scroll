/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/screens/navigation/AppNavigator';
import RootProvider from './src/context/RootProvider';

function App(): React.JSX.Element {

  return (
    <RootProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </RootProvider>

  );
}

export default App;
