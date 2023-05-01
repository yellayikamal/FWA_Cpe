import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import LoginScreen from '../Screens/LoginScreen';
import SplashScreen from '../Screens/SplashScreen';
import UserLoginScreen from '../Screens/UserLoginScreen';
import AdminLoginScreen from '../Screens/AdminLoginScreen';
import UserHomeScreen from '../Screens/UserHomeScreen';
import AdminHomeScreen from '../Screens/AdminhomeScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{animationEnabled: false, header: () => null}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Login"
          options={{animationEnabled: true, header: () => null}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="User"
          options={{animationEnabled: true, header: () => null}}
          component={UserLoginScreen}
        />
        <Stack.Screen
          name="Admin"
          options={{animationEnabled: true, header: () => null}}
          component={AdminLoginScreen}
        />
         <Stack.Screen
          name="UserHome"
          options={{animationEnabled: true, header: () => null}}
          component={UserHomeScreen}
        />
        <Stack.Screen
          name="AdminHome"
          options={{animationEnabled: true, header: () => null}}
          component={AdminHomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 

export default MainNavigator;