import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';

import Main  from '../src/Page/Main';
import Mape  from '../src/Page/Mape';
import Profile from '../src/Page/Profile';
import Basket from '../src/Page/Basket';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();

export default function Tabs()  {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel:false,
            }}
        >
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="Mape" component={Mape} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Basket" component={Basket} />
        </Tab.Navigator>
    )
}