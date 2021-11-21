import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView,ScrollView, TouchableHighlight,FlatList } from 'react-native'
import { COLORS, HEIGHT, SIZES } from '../../constants'
import {Header,Footer, ProductCart} from '../components/';
import Card from '../components/Card';
const CategoryList = (props) => {
    // const {catergor_data, product_info} = props.data;
    // console.log(props.data);
    // const {_id, group, name} = props.data[0];
    // console.log(_id);
    // console.log('bbbbbbbbb');
    // props.data.map(item =>(console.log(item.group, item._id)))
    const [categoryIndex, setCategoryIndex] = useState(0);
    return (        
        <View>
            <ScrollView horizontal={true} style={{marginTop:20, paddingBottom:6}}>
                <View style={styles.categoryContainer}>
                    {props.data.map((item) =>
                        <View style={styles.container}>        
                            <TouchableHighlight key={item._id} activeOpacity={0.8} underlayColor={COLORS.white} onPress={() => setCategoryIndex(item._id)}>                
                                <Text style={[styles.categorText,categoryIndex == item._id && styles.categorTextSelected ]}>{item.group} {item.name =null } </Text>                
                            </TouchableHighlight>      
                        </View>
                    
                    // <Categories data={item} key={index} />
                    )}
                </View>
            </ScrollView>
            <View style={styles.contain_0}> 
                <FlatList data={props.product} 
                                renderItem={({item}) =><Card product={item}/> }
                                keyExtractor={(item) => item._id}                    
                        />
            </View>
        </View>    
    )

}

const styles = StyleSheet.create({
    categoryContainer:{
        marginTop:10,
        marginLeft: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // flexShrink: 1        
    },
    
    ////
    contain_0:{
        height: HEIGHT/ 2.5,
        marginBottom: 30,
    },
    contain_banner:{
      alignItems: 'center',
    },
    
    contain_2:{
        flexShrink: 1,
        marginBottom: 130,
        // backgroundColor: 'gold'
    },
    img: {
        width : 331,
        height : 160
    },
    container: {
        // marginRight: 15,
        // marginLeft: 5,
        // flexDirection: 'row',
        // backgroundColor: '#FFFFFF',
        // backgroundColor: 'gold'
        // flexWrap: 'wrap',
        // justifyContent: 'center',
    },
    categorText: {
        fontSize: SIZES.h3,
        marginTop: 10,
        color: COLORS.gray,
        // backgroundColor: 'gold',
        textAlign: 'center',
    },
    categorTextSelected: {
        color: COLORS.green,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: COLORS.green,
    }

})

export default CategoryList
