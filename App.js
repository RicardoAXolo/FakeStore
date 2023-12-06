import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navigations/StackNavigation1'
import DrawerNavigator1 from './Navigations/DrawerNavigator1';
import 'react-native-reanimated'


export default function App() {
  return (
      <NavigationContainer>
        <DrawerNavigator1/>
      </NavigationContainer>
  );
}

