
import AppLoading from 'expo-app-loading';

import React, {useState} from 'react';

import { SafeAreaView, StyleSheet, Text, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import * as Font from 'expo-font';
import {globalStyle} from './style/style';
const fonts = () => Font.loadAsync({
  'Roboto-bold': require('./style/fonts/Roboto-Bold.ttf')
});

import { Navigator } from './navigation/AppNavigator';

export default function App() {
  const [font, setFont] = useState(false);
  
  if(font){
    return (
      //<SafeAreaView>
        <NavigationContainer>
          <Navigator/>
        </NavigationContainer>
      //</SafeAreaView>
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
