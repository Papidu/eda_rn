
import AppLoading from 'expo-app-loading';

import React, {useState} from 'react';

import { SafeAreaView, StyleSheet, Text, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Font from 'expo-font';
import {globalStyle} from './style/style';
import Main from './src/Page/Main';
import Profile from './src/Page/Profile';
import Basket from './src/Page/Basket';
import { Mape } from './src/Page/Mape';
const fonts = () => Font.loadAsync({
  'Roboto-bold': require('./style/fonts/Roboto-Bold.ttf')
});
 
// import TabNav from './navigation';
// const TabArr = [
//         {route: 'Main', label: 'Main', type: }
// ]
// const AuthStack = createStackNavigator(); Forkknife
const Tabs = createBottomTabNavigator();
export default function App() {
  const [font, setFont] = useState(false);
  
  if(font){
    return (
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={{
            headerShown:false,
          }}
        >
          <Tabs.Screen name="Main" component={Main}/>
          <Tabs.Screen name="Mape" component={Mape}/>
          <Tabs.Screen name="Profile" component={Profile}/>
          <Tabs.Screen name="Basket" component={Basket}/>
        </Tabs.Navigator >
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading 
          startAsync={fonts} 
          onFinish={() => setFont(true)}
          onError={console.warn} />
    );
  };
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
