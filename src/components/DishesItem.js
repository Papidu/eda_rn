import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList, RefreshControl } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../constants';
import AddDish from '../../assets/img_to_rn/add_dish';
import BasketSVG from '../../assets/img_to_rn/basket';
import { useSelector, useDispatch } from 'react-redux';
import {changeCategory, changeCategoryID} from '../features/categorySlice'
import { addItemInCart, getTotalPrice } from '../features/counterInBascketSlice';

const all_url = 'https://eda.na4u.ru/api/dishes';
const headrGet = { 
  method: 'GET',
  mode:'no-cors',
  credentials: 'same-origin', // It can be include, same-origin, omit
  headers: {
      'Content-Type': 'application/json' // Your headers
}}


export default function DishesItem(props) {    
    const {type_cat} = useSelector((state) => state.category);
    const [refreshing, setrefReshing] = useState(false)
    const [productItem, setproductItem] = useState(props.product)
    const onRefreshItem =async () =>{
        setrefReshing(true);
        try {
            const response = await fetch(all_url,headrGet);
            const json = await response.json();
            setproductItem(json);
            setrefReshing(false);   
          } catch (error) {
            console.log('error',error);
          } finally {
            setrefReshing(false);
          }
    }

    // console.log(props.product.length,productItem.length)

    return (
        <View style={{height: 280}}>            
        {
            productItem.length === 0? 
                <FlatList 
                data={props.product.filter(x => x.category_type === parseInt(type_cat, 10))}
                renderItem={({item}) =><DishesCart product={item} />}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={<RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefreshItem}
                    />}
                />
            : <FlatList 
            data={productItem.filter(x => x.category_type === parseInt(type_cat, 10))}
            renderItem={({item}) =><DishesCart product={item} />}
            keyExtractor={(item) => item.id.toString()}
            refreshControl={<RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefreshItem}
                            />}
            />
        }
         </View>       
    );
}

const DishesCart = ({product}) =>{
    const {itemsInCart} = useSelector((state) => state.cart);
    const {itemsUniqCountInCard} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigation = useNavigation()
    
    const handleClickInCart = (e) => {
        // console.log('handleClickInCart ', e.name)
        dispatch(addItemInCart(e));
        dispatch(getTotalPrice());
    }
    const handleNavigateToProfile = (product) => {
        // console.log(product.name, '---------------------\n\n')
        // let a = itemsUniqCountInCard.filter(x => x.name === product.name);
        // console.log(a.name, a.count);
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
                <TouchableOpacity style={{flexGrow: 5, marginRight:25, marginBottom:7, width:35,height:35}} underlayColor={COLORS.green} onPress={()=> handleClickInCart(product)}>
                        <AddDish/>
                </TouchableOpacity> 
        </TouchableOpacity>   
    )};


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
        margin: 10,
    },
    text:{},
    menu_name_cost_quantity: {
        textAlign: 'center',
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 0,
        paddingRight:'10%'
    },
})
