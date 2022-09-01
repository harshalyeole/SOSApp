import React from 'react';
import { StyleSheet,Text,View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ContactsScreen from '../screens/ContactsScreen/index';

const MainStack = createNativeStackNavigator();
const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
        
        <MainStack.Screen name='HomeScreen' component={HomeScreen} 
        options={
          {
            title: 'Home Screen',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#7868E6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }
        }
        />
        <MainStack.Screen name='contactsScreen' component={ContactsScreen} 
        options={
          {
            title: 'Contacts Screen',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#7868E6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }
        }/>

    </MainStack.Navigator>
  );
}
export default MainStackScreen;