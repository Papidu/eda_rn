import React, {useState} from 'react';
import { StyleSheet, Text,Image, View, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header  from '../components/Header';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';
import { addItemInCart,getItemCountCard } from '../features/counterInBascketSlice';
import AddDish from '../../assets/img_to_rn/add_dish';
import BasketSVG from '../../assets/img_to_rn/basket';

export default function Basket() {
    const {itemsInCart} = useSelector((state) => state.cart);
    const {itemsUniqInCard} = useSelector((state) => state.cart);
    const {itemsUniqCountInCard} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    // console.log(new Set(itemsInCart))
    //Array.from(new Set(itemsInCart));
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
                    {                    
                        itemsUniqCountInCard.map((item) => (
                            <DishesCard key={item.id} product={item}/>
                            // <Text key={index}> {item.id}{' -> '}{item.name}{' - '}{item.count}</Text>
                        ))
                    }                    
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

const DishesCard = ({product}) =>{
    const {itemsInCart} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigation = useNavigation()
    
    const handleClickInCart = (e) => {
        console.log('handleClickInCart ', e.name)
        dispatch((addItemInCart(e)))
    }
    const handleNavigateToProfile = (product) => {
        navigation.navigate('Details', product);
    }

    return (
        <TouchableOpacity style= {styles.container} activeOpacity={1} onPress={() => handleNavigateToProfile(product)}>
                <Image style={styles.img} source={{uri:product.img}}/>
                <View style={{marginLeft:15, width:170, marginRight:5}}>
                    <Text>{product.name}</Text>
                    <View style={{flexDirection: 'row'}}>  
                        <Text style={{fontWeight:'bold'}}>{product.price} ₽ {' '}</Text>                    
                        <Text style={{color: COLORS.green}}><BasketSVG/>  </Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>  
                        <Text style={{fontWeight:'bold'}}>{product.count} {' '}</Text> 
                </View>
                <TouchableOpacity style={{flexGrow: 5, marginRight:25, marginBottom:7, width:35,height:35}} underlayColor={COLORS.green} onPress={()=> handleClickInCart(product)}>
                        <AddDish/>
                </TouchableOpacity> 
        </TouchableOpacity>   
    )};


const styles = StyleSheet.create({

});