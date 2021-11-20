import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableHighlight} from 'react-native'

import AddDish from '../../assets/img_to_rn/add_dish';
import BasketSVG from '../../assets/img_to_rn/basket';

import { COLORS, SIZES, HEIGHT,WIDTHS} from '../../constants';

const ProductCart = (product) => {
    console.log('product cart'); 
    let { name, description, price,image, ...rest} = product.product;
    // const {a} = count_in_basket ;

    // console.log(count_in_basket);
    // console.log(product);
	return (
		<View>
            <TouchableHighlight underlayColor={COLORS.green} onPress={() => alert('Pressed!')}>
                <View style= {styles.container}>
                    <View style={styles.text} >
                    <Image style={styles.img} source={{uri:image[0]}}/>
                        {/* <Image style={styles.img} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Anime_Barnstar_Hires.png/1200px-Anime_Barnstar_Hires.png'}}/>		 */}
                    </View>
                    <View style={styles.menu_name_cost_quantity}>
                        <Text>
                            {name} {' '} {price} ₽ <BasketSVG/> 
                        </Text>       
                    </View>
                    <TouchableHighlight>
                        <AddDish/>
                    </TouchableHighlight>
                </View>
            </TouchableHighlight>
		</View>
	)
}

const styles = StyleSheet.create({
    container:{
        marginTop: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 10,
        borderBottomWidth:1,
        // backgroundColor: '#FFFFFF'
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

export { ProductCart }
