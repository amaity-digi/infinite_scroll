import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import DeatilsScreen from '../screen/DeatilsScreen';
import PullToRefresh from '../screen/PullToRefresh';
import Product from '../screen/Product';
import ThemeScreen from '../screen/ThemeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  return (
    <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={DeatilsScreen}/>
        <Stack.Screen name="InfinityScroll" component={PullToRefresh} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Theme" component={ThemeScreen} />

    </Stack.Navigator>
  )
}

export default AppNavigator