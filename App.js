import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import {globalStyle} from './style/style';
import Menu from './components/Menu';

const fonts = () => Font.loadAsync({
  'Roboto-bold': require('./style/fonts/Roboto-Bold.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);
  
  if(font){

    return (
      <Menu />
    );
  } else {
    return (
      <AppLoading 
          startAsync={fonts} 
          onFinish={() => setFont(true)}
          onError={console.warn} />
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
