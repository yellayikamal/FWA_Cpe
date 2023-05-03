import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import LoginScreen from '../Screens/LoginScreen';
import SplashScreen from '../Screens/SplashScreen';


import UserLoginScreen from '../Screens/UserLoginScreen';
import UserHomeScreen from '../Screens/UserHomeScreen';
import UserViewScreen from './UserScreen';
import UserSettingScreen from './UserSettingScreen';
import UserMenuScreen from './UserMenuScreen';
import UserConnectScreen from './UserConnectScreen';


import AdminHomeScreen from '../Screens/AdminhomeScreen';
import AdminScreen from './AdminScreen';
import AdminLoginScreen from '../Screens/AdminLoginScreen';
import AdminSettingsScreen from './AdminSettingsScreen';
import AdminMenuScreen from './AdminMenuScreen';
import AdminNetworkScreen from './AdminNetworkScreen';
import AdminStatisticScreen from './AdminStatisticScreen'


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
        <Stack.Screen
          name="UserScreen"
          options={{animationEnabled: true, header: () => null}}
          component={UserViewScreen}
        />
         <Stack.Screen
          name="UserSettingScreen"
          options={{animationEnabled: true, header: () => null}}
          component={UserSettingScreen}
        />
         <Stack.Screen
          name="UserMenuScreen"
          options={{animationEnabled: true, header: () => null}}
          component={UserMenuScreen}
        />
        <Stack.Screen
          name="UserConnectScreen"
          options={{animationEnabled: true, header: () => null}}
          component={UserConnectScreen}
        />
         <Stack.Screen
          name="AdminScreen"
          options={{animationEnabled: true, header: () => null}}
          component={AdminScreen}
        />
        <Stack.Screen
          name="AdminSettingsScreen"
          options={{animationEnabled: true, header: () => null}}
          component={AdminSettingsScreen}
        />

        <Stack.Screen
          name="AdminMenuScreen"
          options={{animationEnabled: true, header: () => null}}
          component={AdminMenuScreen}
        />  
        <Stack.Screen
          name="AdminNetworkScreen"
          options={{animationEnabled: true, header: () => null}}
          component={AdminNetworkScreen}
        />
        <Stack.Screen
          name="AdminStatisticScreen"
          options={{animationEnabled: true, header: () => null}}
          component={AdminStatisticScreen}
        />
        


      </Stack.Navigator>
    </NavigationContainer>
  );
}; 

export default MainNavigator;