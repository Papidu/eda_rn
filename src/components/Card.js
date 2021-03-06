import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { COLORS } from '../../constants';
import AddDish from '../../assets/img_to_rn/add_dish';
import BasketSVG from '../../assets/img_to_rn/basket';
const Card = ({product}) => {
    const navigation = useNavigation()

    const handleNavigateToProfile = (product) => {
        navigation.navigate('Details', product);
    }
    return (
        <View>
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
		</View>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 16,
        paddingLeft: 5,
        paddingRight: 30,
        borderWidth:1,
        height: 120,
        marginHorizontal: 2,
        borderRadius: 10
    },
    text:{},
    menu_name_cost_quantity: {
        textAlign: 'center',
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 0,
        paddingRight:'10%'
    },
    img: {
        height: 83,
        width: 87,
        marginBottom: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 5
    }
})

export default Card
