import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../constants';
import AddDish from '../../assets/img_to_rn/add_dish';
import BasketSVG from '../../assets/img_to_rn/basket';
import { useSelector, useDispatch } from 'react-redux';
import {changeCategory, changeCategoryID} from '../features/categorySlice'
import { addItemInCart } from '../features/counterInBascketSlice';


export default function DishesItem(props) {    
    const {type_cat} = useSelector((state) => state.category);
    
    return (
        <View style={{height: 280}}>
        <FlatList 
            data={props.product.filter(x => x.category_type === parseInt(type_cat, 10))}
            renderItem={({item}) =><DishesCart product={item} />}
            keyExtractor={(item) => item.id.toString()}/>
         </View>       
    );
}

const DishesCart = React.memo(({product}) =>{
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
        <TouchableOpacity activeOpacity={1} onPress={() => handleNavigateToProfile(product)}>
            <View style= {styles.container}>    
                <Image style={styles.img} source={{uri:product.img}}/>
                <View style={{marginLeft:15, width:200}}>
                    <Text>{product.name}</Text>
                    <View style={{flexDirection: 'row'}}>  
                        <Text style={{fontWeight:'bold'}}>{product.price} ₽ {' '}</Text>                    
                        <Text style={{color: COLORS.green}}><BasketSVG/>  </Text>
                    </View>
                </View>
                <TouchableOpacity style={{flexGrow: 5, marginRight:20}} underlayColor={COLORS.green} onPress={()=> handleClickInCart(product)}>
                        <AddDish/>
                </TouchableOpacity>         
            </View>
        </TouchableOpacity>   
    )});


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',        
        height: 100,
        width: '100%',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 8,
        backgroundColor: '#eee',
    },
    img: {
        width: 87,
        height: 83,
        margin: 10
    },
    text:{},
    menu_name_cost_quantity: {
        textAlign: 'center',
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 0,
        paddingRight:'10%'
    },




    // props.product.filter(x => x.category_type === parseInt(type_cat, 10)).map((item, index) => (
    //     <View key={index} style={{}}>
    //         <TouchableOpacity style={{}} activeOpacity={1} onPress={() => handleNavigateToProfile(props.product)}>
    //             <DishesCart product={item} />            
    //         </TouchableOpacity>
    //     </View> 
    // ))
// img: {
//     height: 83,
//     width: 87,
//     marginBottom: 10,
//     marginRight: 10,
//     marginTop: 5,
//     borderRadius: 5
// }
})
