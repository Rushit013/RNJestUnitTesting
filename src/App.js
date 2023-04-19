import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/**
 * Screens
 */
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import MathScreen from './screens/Math';
import Dashboard from './screens/Dashboard';

import {navigationInit} from './utils/navigation';

/**
 * Manage your routes
 */
const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef => navigationInit(navigationRef)}>
      <Stack.Navigator initialRouteName="Math">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Math" component={MathScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
