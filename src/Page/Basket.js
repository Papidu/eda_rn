import React, {useState} from 'react';
import { StyleSheet, Text,Image, View, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header  from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { addItemInCart } from '../features/counterInBascketSlice';

export default function Basket() {
    const {itemsInCart} = useSelector((state) => state.cart);
    // console.log(new Set(itemsInCart))
    let set = Array.from(new Set(itemsInCart));
    return (
    <SafeAreaView>
        <Header/>
        <ChangeLocation/>
         {
            itemsInCart.length > 0? (
                <View>
                <TouchableOpacity style={{marginLeft:'auto', marginRight:18}}>
                    <Text style={{color:'gray', textDecorationLine: 'underline'}}>Удалить всё</Text>
                </TouchableOpacity>

                    {set.map((item, index) => (
                        <Text key={index}>{item.name}{' -> '}{item.price}</Text>
                    ))}
                </View>
            ): null             
         }
        <Text >Привет корзина!</Text>
    </SafeAreaView>
    );
  
}

const ChangeLocation = (props) =>{
    return (
        <View style={{marginBottom:10}}>
            <Text style={{marginLeft:18}}>Адрес выдачи заказа:</Text>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
               <Text>Екатиринбург, Мира,17</Text>
               <TouchableOpacity>
                    <Text style={{color:'green', textDecorationLine: 'underline'}}>Изменить адрес</Text> 
                </TouchableOpacity>
            </View>
        </View>
    )
} 

const CardProduct = (props) =>{
    return (
        <View style={{marginBottom:10}}>
            <Text style={{marginLeft:18}}>Адрес выдачи заказа:</Text>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
               <Text>Екатиринбург, Мира,17</Text>
               <TouchableOpacity>
                    <Text style={{color:'green', textDecorationLine: 'underline'}}>Изменить адрес</Text> 
                </TouchableOpacity>
            </View>
        </View>
    )
} 


const styles = StyleSheet.create({

});