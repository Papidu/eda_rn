import React from 'react'
import Main from './src/Page/Main';
import Mape from './src/Page/Mape';
import Profiler  from './src/Page/Profile';
import Basket from './src/Page/Basket';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// const Tabs = createBottomTabNavigator();

// const TabArr = [
//         {route: ''}
// ]






// const Stack = createStackNavigator();

// export default function Navigare() {
//     return <NavigationContainer>
//         <Stack.Navigator>
//             <Stack.Screen 
//                 name='Main'
//                 component={Main}/>
        
//         <Stack.Screen 
//                 name='Mape'
//                 component={Mape}/>
        
//         {/* <Stack.Screen 
//                 name='Profiler'
//                 component={Profiler}/>
        
//         <Stack.Screen 
//                 name='Basket'
//                 component={Basket}/> */}
//         </Stack.Navigator>
//     </NavigationContainer>;
// }