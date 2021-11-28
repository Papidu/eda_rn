import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// import Main  from '../src/Page/Main';
import Mape  from '../src/Page/Mape';
import Profile from '../src/Page/Profile';
import Basket from '../src/Page/Basket';
import OrderSpecificProduct from '../src/Page/OrderSpecificProduct';
import { COLORS } from '../constants';

import SVGForkknife from '../assets/img_to_rn/forkknife'
import SVGMappin from '../assets/img_to_rn/mappin'
import SVGUser from '../assets/img_to_rn/user'
import SvgShopcart from '../assets/img_to_rn/shopcart'
import ProductDetailsScreen from '../src/Page/ProductDetailsScreen';
import Menu from '../src/Page/Menu';
import { View,StyleSheet, Text } from 'react-native';
import { addItemInCart } from '../src/features/counterInBascketSlice'; //'../features/counterInBascketSlice';
import { useSelector, useDispatch } from 'react-redux';
import { product } from '../src/components/categor';
import getTotalPrice from '../src/utils';


export const Navigator = () => {
    const Tabs = createBottomTabNavigator();
    const Stack = createStackNavigator();
    const item = useSelector((state) => state.cart.itemsInCart);
    const price = getTotalPrice(item);
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
                    name="Menu" 
                    component={Menu}
                    options={{
                        tabBarLabel: 'Меню',
                        tabBarIcon: ({color,size, focused}) => (<SVGForkknife color={focused ? COLORS.green: COLORS.gray}/>),
                    }}    
                />
                <Tabs.Screen 
                    name="Mape"
                    component={Mape}
                    options={{
                        tabBarLabel: 'Mape',
                        tabBarIcon: ({color,size, focused}) => (<SVGMappin color={focused ? COLORS.green: COLORS.gray}/>),
                    }}
                />
                <Tabs.Screen 
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({color,size, focused}) => (<SVGUser color={focused ? COLORS.green: COLORS.gray}/>),
                    }}
                />
                <Tabs.Screen 
                    name="Basket"
                    component={Basket}
                    options={{
                        tabBarLabel: 'Basket',
                        tabBarIcon: ({color,size, focused}) => (<SvgShopcart color={focused ? COLORS.green: COLORS.gray}/>),
                        tabBarBadge: price,
                        tabBarBadgeStyle: { backgroundColor: 'green' }
                    }}
                />
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
            {/* <Stack.Screen name="Menu" component={Menu}/> */}
            <Stack.Screen name="Details" component={ProductDetailsScreen} />
            <Stack.Screen name="Menu" component={Menu}/>
            <Stack.Screen name="Basket" component={Basket} />
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="OrderSpecificProduct" component={OrderSpecificProduct} />
        </Stack.Navigator>
    );

};

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
  
