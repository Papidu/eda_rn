import React, {Component} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
// import SvgArrow from '../../assets/img_to_rn/'///'../assets/img_to_rn/arrow';
import { AntDesign } from '@expo/vector-icons';

import SvgArrowLeft from '../../assets/img_to_rn/arrow_left';//'../../assets/img_to_rn/arrow_left';
import BasketSVG from '../../assets/img_to_rn/basket';
import Banner from '../../assets/img_to_rn/banner';
import { COLORS, HEIGHT, SIZES, WIDTH } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { addItemInCart,incrementItemCard,decrementItemCard,getTotalPrice,deleteAllItemInCart } from '../features/counterInBascketSlice';
const ProductDetailsScreen = ({navigation, route}) => {
    const product = route.params;
    console.log(product);
    // console.log(product.img)
    const dispatch = useDispatch();
    
    const handleIncrementItemCard = (e) => {
        console.log('handleIncrementItemCard ', e.name, e.count) //incrementItemCard,decrementItemCard
        dispatch(incrementItemCard(e));
        dispatch(getTotalPrice());
    }
    const handleDecrementItemCard = (e) => {
        console.log('handleDecrementItemCard ', e.name, e.count)
        dispatch(decrementItemCard(e));
        dispatch(getTotalPrice());
    }
    return (
        <SafeAreaView style={styles2.container}>
            <View style={styles.header}>
                    <SvgArrowLeft onPress={() => navigation.goBack()}  />
                    <Text style={{flexGrow:2, fontWeight: 'bold', fontSize: SIZES.h3}} >{product.name}</Text>
            </View>
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
                            <Text style={{color:COLORS.white, fontWeight:'bold', fontSize:18}}>?? ??????????????</Text>
                        </View>
                    </View>
                </View>    
                </View> 

        </SafeAreaView>
    )
}
const styles2 = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal: 13, 
        // backgroundColor:COLORS.green,
    },
    img_title:{
        flexDirection: 'row',
        backgroundColor: 'gold'
    },
    img:{
        resizeMode: 'contain',
        height: 60,
        width: 98,
        marginLeft: 6
    },
    text_title:{
        fontSize: SIZES.h3,
        fontWeight: 'bold',
        marginLeft: 23
    },
    countItems:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        marginHorizontal:16,
        // backgroundColor: 'red',
    }
})
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
        // alignItems:'center'
    },
    imgContainer: {
        // flex:0.45,
        // width:60,
        // height:98,
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
/*
<View style={{}}> 
                <View style={styles2.img_title}>
                    <Image source={{uri:product.img}} style={styles2.img} />
                    <Text style={styles2.text_title}>{product.name}</Text>
                </View>
                <View style={styles2.countItems}>
            
                <View style={{flexDirection:'row', alignItems:'center', fontSize:SIZES.h3 }}>
                    <TouchableOpacity >
                        <AntDesign name="minuscircleo" size={30} color="black" />
                    </TouchableOpacity>
                        <Text style={{fontSize:SIZES.h3}}>{'  '}{product.count  | 1}  </Text>
                        
                    <TouchableOpacity >
                        <AntDesign name="pluscircleo" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={{fontWeight:'bold', fontSize: SIZES.h2}}>{product.price}</Text>
                </View>            
            </View>
*/

/*

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
                            <Text style={{color:COLORS.white, fontWeight:'bold', fontSize:18}}>?? ??????????????</Text>
                        </View>
                    </View>
                </View>    
                </View> 

*/