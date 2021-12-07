import React, {useState} from 'react';
import { StyleSheet, Text,Image, View, SafeAreaView, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header  from '../components/Header';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';
import { addItemInCart,incrementItemCard,decrementItemCard,getTotalPrice,deleteAllItemInCart } from '../features/counterInBascketSlice';
import AddDish from '../../assets/img_to_rn/add_dish';
import BasketSVG from '../../assets/img_to_rn/basket';
import { AntDesign } from '@expo/vector-icons'; 
import { changeSelectedMarker } from '../features/dataMapSlice';
export default function Basket() {
    const {itemsInCart} = useSelector((state) => state.cart);
    const {itemsUniqInCard} = useSelector((state) => state.cart);
    const {itemsUniqCountInCard} = useSelector((state) => state.cart);
    const {price} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const {selected_marker} = useSelector((state) => state.dataMap)

    return (
    <SafeAreaView>
        <Header/>
        <ChangeLocation local = {selected_marker}/>
        <View style={styles.big_container}>
            {
                itemsInCart.length > 0? (
                    <View style={{height:490}}>
                        <TouchableOpacity style={{marginLeft:'auto', marginRight:18}} onPress={()=>dispatch(deleteAllItemInCart())}>
                            <Text style={{color:'gray', textDecorationLine: 'underline', marginBottom:5}}>Удалить всё</Text>
                        </TouchableOpacity> 
                        <FlatList
                                style={{marginBottom:5}} 
                                data={itemsUniqCountInCard}
                                renderItem={({item}) =><DishesCard product={item} />}
                                keyExtractor={(item) => item.id.toString()}
                        /> 
                        <View style={styles.text}>
                            <Text>Сумма заказа</Text>
                            <Text >{price}</Text>
                        </View>  
                        <View style={styles.text}>
                            <Text style={{fontWeight: 'bold' }}>Итого</Text>
                            <Text style={{fontWeight: 'bold' }}>{price}</Text>
                        </View>                                   
                    </View>
                ): null                       
            }
        
        </View>
    </SafeAreaView>
    );
  
}

const ChangeLocation = ({local}) =>{
    const navigation = useNavigation()

	const handleNavigateMap = () => {
		navigation.navigate('Map');
	}
    return (
        <View style={{marginBottom:10}}>
            <Text style={{marginLeft:18}}>Адрес выдачи заказа:</Text>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
               <Text style={{
                   marginLeft:10,
                   width:200,
                   fontWeight:'bold'}}>{local.title}</Text>
               <TouchableOpacity activeOpacity={1} onPress= {() => handleNavigateMap() }>
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
    const handleNavigateToProfile = (product) => {
        // console.log('product -> ', product)
        navigation.navigate('Details', product);
    }

    return (
        <View style= {styles.container}>
            <TouchableOpacity  activeOpacity={1} onPress={() => handleNavigateToProfile(product)}>
                <View style= {styles.container_info}>
                    <Image style={styles.img} source={{uri:product.img}}/>
                    <View style={{marginLeft:5, width:135, marginRight:5}}>
                        <Text>{product.name}</Text>
                        <View style={{flexDirection: 'row'}}>  
                            <Text style={{fontWeight:'bold'}}>{product.price} ₽ {' '}</Text>  
                        </View>
                    </View>                
                </View>
            </TouchableOpacity>      
            <View style={styles.container_btn}>
                <TouchableOpacity  onPress={()=> handleDecrementItemCard(product)}>
                    <AntDesign name="minussquare" size={24} color="gray"/>
                </TouchableOpacity>
                    <Text>{product.count}</Text>
                <TouchableOpacity onPress={()=> handleIncrementItemCard(product)}>
                    <AntDesign name="plussquare" size={24} color="gray"  />
                </TouchableOpacity>    
            </View>
        </View>   
         
    )};


const styles = StyleSheet.create({
    big_container:{
        height:900,//height:650,
        // paddingTop:20,
        // paddingBottom:100,
        marginBottom:1
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',        
        height: 100,
        width: '100%',
        marginBottom:5,
        backgroundColor: '#eee',
        // backgroundColor: 'black',
        
    },
    container_info:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 10,
        // marginRight: 8,
        // backgroundColor: '#eee',
        marginTop:10
    },
    img: {
        width: 87,
        height: 83,
        margin: 10,
        marginRight:5
    },
    text:{
        // backgroundColor:'white',
        flexDirection: 'row', 
        justifyContent: 'space-between',  
        alignItems: 'center',
        marginLeft: 10,
        marginRight:25
    },
    menu_name_cost_quantity: {
        textAlign: 'center',
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 0,
        paddingRight:'10%'
    },
    container_btn:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#eee',
        flexGrow: 6,
        marginRight:16, 
        width:35,
        height:35
    }
});




// <SafeAreaView>
//         <Header/>
//         <ChangeLocation/>
//          {
//             itemsInCart.length > 0? (
//                 <View>
//                 <TouchableOpacity style={{marginLeft:'auto', marginRight:18}}>
//                     <Text style={{color:'gray', textDecorationLine: 'underline', marginBottom:5}}>Удалить всё</Text>
//                 </TouchableOpacity>                                    
//                 </View>
//             ): null                       
//          }
//          {
//              itemsInCart.length > 0?(
//                 <FlatList 
//                         data={itemsUniqCountInCard}
//                         renderItem={({item}) =><DishesCard product={item} />}
//                         keyExtractor={(item) => item.id.toString()}
//                 /> 
//             ):null  
//          }
//         <Text >Привет корзина!</Text>
//     </SafeAreaView>