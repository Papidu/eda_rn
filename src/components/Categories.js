import React, {useState}  from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,TouchableHighlight} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { COLORS, HEIGHT, SIZES } from '../../constants';
import {changeCategory, changeCategoryID} from '../features/categorySlice'

export default function Categories(props) {
    // const [categoryIndex, setCategoryIndex] = useState('0');
    // const [categorySelect, setCategorySelect] = useState("Суп");
    const {selected_category} = useSelector((state) => state.category);
    const dispatch = useDispatch()
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:20, paddingBottom:6}}>
                <View style={styles.categoryContainer}>
                    {/* {console.log(props.catergor)}    */}
                    {props.catergor.map((item, index) =>                        
                        <View key={index} style={styles.container}>        
                            <TouchableOpacity  
                                                activeOpacity={0.8} 
                                                underlayColor={COLORS.white} 
                                                onPress={() => 
                                                {
                                                    dispatch(changeCategoryID(index))
                                                    dispatch(changeCategory(String(item.id)))
                                                }}>                                                             
                                <Text style={[styles.categorText, selected_category == index && styles.categorTextSelected ]}>{item.type_dishes}</Text>                
                            </TouchableOpacity>      
                        </View>
                    )}  
                </View>
            </ScrollView>   
        </View>
    )
}

const styles = StyleSheet.create({
    categoryContainer:{
        marginTop:10,
        marginLeft: 5,
        marginRight: 10,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',       
    },
    container: {
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
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
