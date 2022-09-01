import React from 'react';
import { StyleSheet,Text,View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={
      {
        headerShown: false
      }
    }>
        <RootStack.Screen name='SplashScreen' component={SplashScreen} />
        <RootStack.Screen name='SigninScreen' component={SignInScreen} />
        <RootStack.Screen name='SignupScreen' component={SignUpScreen} />

    </RootStack.Navigator>
  );
}
export default RootStackScreen;