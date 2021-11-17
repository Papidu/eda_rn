import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeAreaView, StyleSheet, Text, View} from 'react-native';


import Main  from './src/Page/Main';

import * as Font from 'expo-font';
import {globalStyle} from './style/style';

const fonts = () => Font.loadAsync({
  'Roboto-bold': require('./style/fonts/Roboto-Bold.ttf')
});
 
// const AuthStack = createStackNavigator();
// const Tabs = createBottomTabNavigator();
export default function App() {
  const [font, setFont] = useState(false);
  
  if(font){

    return (
      // <NavigationContainer>
      //   <Tabs/>
      // </NavigationContainer>
      <SafeAreaView style={globalStyle.AndroidSafeArea}>
        <Main/>
      </SafeAreaView>
      // <NavigationContainer>
      //   <Tabs.Navigator>
      //     <Tabs.Screen name="Main" component={Main} />
      //     <Tabs.Screen name="Main2" component={Mape} />
      //   </Tabs.Navigator>
      // </NavigationContainer>

      // <SafeAreaView>
      //   <NavigationContainer>
      //     <AuthStack.Navigator>
      //       <AuthStack.Screen name="Main" component={Main} />
      //       <AuthStack.Screen name="Mape" component={Mape} />
      //       <AuthStack.Screen name="Profile" component={Profile} />
      //       <AuthStack.Screen name="Basket" component={Basket} />
      //     </AuthStack.Navigator>
      //   </NavigationContainer>
      // </SafeAreaView>
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
