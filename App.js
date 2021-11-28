
import AppLoading from 'expo-app-loading';

import React, {useState, useEffect} from 'react';

import { SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/store'
import { Provider } from 'react-redux'

import * as Font from 'expo-font';
import {globalStyle} from './style/style';
const fonts = () => Font.loadAsync({
  'Roboto-bold': require('./style/fonts/Roboto-Bold.ttf')
});

import { Navigator } from './navigation/AppNavigator';
import { COLORS } from './constants';

export default function App() {
  const [font, setFont] = useState(false);
  
  if(font){
    return (
      //<SafeAreaView>
      <Provider store={store}>
        <NavigationContainer style={{backgroundColor:'#E4E4E4'}}>
          <StatusBar barStyle='light-content'  />
          <Navigator/>                  
        </NavigationContainer>
      </Provider>
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
  money: {
    position: 'absolute', 
    zIndex:1,
    elevation:1, 
    height:20,
    width: 45,
    marginTop: 637, 
    marginLeft:299,
    backgroundColor: '#069e0b', 
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
