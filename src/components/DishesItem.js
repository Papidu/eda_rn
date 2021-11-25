import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../constants';
import AddDish from '../../assets/img_to_rn/add_dish';
import BasketSVG from '../../assets/img_to_rn/basket';
import { useSelector, useDispatch } from 'react-redux';
import {changeCategory, changeCategoryID} from '../features/categorySlice'


export default function DishesItem(props) {
    const navigation = useNavigation()

    const {type_cat, selected_category} = useSelector((state) => state.category);
    // const dispatch = useDispatch()

    const handleNavigateToProfile = (product) => {
        navigation.navigate('Details', product);
    }
    // console.log(props.product.filter(x => x.category_type === parseInt(type_cat, 10)), type_cat)
    return (
        <TouchableOpacity style={{marginBottom:100}} activeOpacity={1} onPress={() => handleNavigateToProfile(props.product)}>
            {props.product.filter(x => x.category_type === parseInt(type_cat, 10)).map((item, index) => (
                <View key={index} style={{}}>
                    <DishesCart product={item} />
                </View>
            ))}            
        </TouchableOpacity>
    );
}

const DishesCart = (props) =>{
    return (
        <View style= {styles.container}>        
            <Image style={styles.img} source={{uri:props.product.img}}/>
            <View style={{marginLeft:15, width:200}}>
                <Text>{props.product.name}</Text>  
                <Text style={{fontWeight:'bold'}}>{props.product.price} ₽ {' '}   
                    <BasketSVG/>
                </Text>
            </View>
            <TouchableOpacity style={{flexGrow: 5, marginRight:20}} underlayColor={COLORS.green} onPress={() => alert('Aaaaaaa!')}>
                    <AddDish/>
            </TouchableOpacity>         
        </View>
    )}


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

// img: {
//     height: 83,
//     width: 87,
//     marginBottom: 10,
//     marginRight: 10,
//     marginTop: 5,
//     borderRadius: 5
// }
})
{/* <View>
            <TouchableHighlight underlayColor={COLORS.green} onPress={() => handleNavigateToProfile(product)}>
                <View style= {styles.container}>
                    <View style={styles.text} >
                        <Image style={styles.img} source={{uri:product.img}}/>                       
                    </View>
                    <View style={styles.menu_name_cost_quantity}>
                        <Text>
                            {product.name} {' '} {product.price} ₽ <BasketSVG/> 
                        </Text>       
                    </View>
                    <TouchableHighlight underlayColor={COLORS.green} onPress={() => alert('Aaaaaaa!')}>
                        <AddDish/>
                    </TouchableHighlight>
                </View>
            </TouchableHighlight>
		</View> */}