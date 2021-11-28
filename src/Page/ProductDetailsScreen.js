import React, {Component} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
// import SvgArrow from '../../assets/img_to_rn/'///'../assets/img_to_rn/arrow';

import SvgArrowLeft from '../../assets/img_to_rn/arrow_left';//'../../assets/img_to_rn/arrow_left';
import BasketSVG from '../../assets/img_to_rn/basket';
import Banner from '../../assets/img_to_rn/banner';
import { COLORS, HEIGHT, WIDTH } from '../../constants';

const ProductDetailsScreen = ({navigation, route}) => {
    const product = route.params;
    // console.log(product);
    // console.log(product.img)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                    <SvgArrowLeft onPress={() => navigation.goBack()}  />
                    <Text style={{flexGrow:2}} >{product.name}</Text>
            </View>
            {/* <View style={styles.container}> */}
                <View style={styles.imgContainer}>
                    <Image source={{uri:product.img}} style={styles.img} />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={{marginLeft: 10}}>{product.description}</Text>
                    <View style={styles.containerBTN}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View style={styles.borderBTN}>
                            <Text style={styles.borderBTNText}>-</Text>
                        </View>
                        <Text style={{
                            fontSize:20,
                            marginHorizontal:10,
                            fontWeight:'bold',
                        }}>1</Text>
                        <View style={styles.borderBTN}>
                            <Text style={styles.borderBTNText}>+</Text>
                        </View>
                        <View style={styles.buyBTN}>
                            <Text style={{color:COLORS.white, fontWeight:'bold', fontSize:18}}>В корзину</Text>
                        </View>
                    </View>
                </View>    
                </View> 
                           
            {/* </View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        // backgroundColor:COLORS.green,
        // marginBottom: 16,
        // height:HEIGHT/ 1,
        // width: WIDTH / 1,
        // backgroundColor: 'blue',
    },
    header:{
        paddingHorizontal:16,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgContainer: {
        // flex:0.45,
        flexGrow:1,
        marginTop:20,
        justifyContent: 'center',
        alignItems:'center',
        // backgroundColor:'red',
    },
    img:{
        // resizeMode: 'contain',//'contain', //'contain',
        // flex:1,
        height: 200,
        width: 300,
        // backgroundColor:'gold',

    },
    detailsContainer:{
        // flex: 0.55,
        flexGrow:6,
        backgroundColor:'#8c8b8a',
        // borderColor:COLORS.gray,
        height:HEIGHT/ 3,
        marginHorizontal:16,
        marginBottom: 7,
        borderRadius:20,
        marginTop: 30,
        paddingTop:30,

    },
    containerBTN:{
        marginTop: 30,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    borderBTN:{
        borderColor: 'gold',
        borderWidth:1,
        borderRadius:5,
        height: 40,
        width:60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderBTNText:{
        fontSize:28,
        fontWeight: 'bold'
    },
    buyBTN:{
        width: 150,
        height:50,
        backgroundColor:COLORS.green,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 10,
    }
})

export default ProductDetailsScreen
