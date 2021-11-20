import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Main  from '../src/Page/Main';
import Mape  from '../src/Page/Mape';
import Profile from '../src/Page/Profile';
import Basket from '../src/Page/Basket';
import OrderSpecificProduct from '../src/Page/OrderSpecificProduct';
import { COLORS } from '../constants';

import ForkknifeSVG from '../assets/img_to_rn/forkknife'
import MappinSVG from '../assets/img_to_rn/mappin'
export const Navigator = () => {
    const Tabs = createBottomTabNavigator();
    const Stack = createStackNavigator();

    const TabStack = () => {
        return (
            <Tabs.Navigator
                screenOptions={{
                    headerShown:false,
                    tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: 10,
                    left: 16,
                    right: 16,
                    borderRadius:20
                    }
                }}
            >
                <Tabs.Screen
                    name="Main" 
                    component={Main}
                    options={{
                        tabBarLabel: 'Меню',
                        tabBarIcon: ({color,size, focused}) => (<ForkknifeSVG color={focused ? COLORS.green: COLORS.gray}/>),
                    }}    
                />
                <Tabs.Screen 
                    name="Mape"
                    component={Mape}
                    options={{
                        tabBarLabel: 'Mape',
                        tabBarIcon: ({color,size, focused}) => (<MappinSVG color={focused ? 'gold': COLORS.gray}/>),
                    }}
                />
                <Tabs.Screen name="Profile" component={Profile}/>
                <Tabs.Screen name="Basket" component={Basket}/>
            </Tabs.Navigator >
        );
    };

    return (
        <Stack.Navigator 
            initialRouteName="App"
            screenOptions={{
                headerShown:false,
            }}
        >
            <Stack.Screen name= {'Tabs'} component={TabStack} />
            <Stack.Screen name="Main" component={Main}/>
            <Stack.Screen name="Basket" component={Basket}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="OrderSpecificProduct" component={OrderSpecificProduct} />
        </Stack.Navigator>
    );

};


