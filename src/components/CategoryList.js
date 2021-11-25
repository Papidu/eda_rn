// import React, {useState} from 'react'
// import { StyleSheet, Text, View, SafeAreaView,ScrollView, TouchableHighlight,FlatList } from 'react-native'
// import { COLORS, HEIGHT, SIZES } from '../../constants'
// import {Header,Footer, ProductCart} from '../components/';
// import Card from '../components/Card';

// export default function CategoryList(props) {
//     const [categoryIndex, setCategoryIndex] = useState("61953155ab751905bd550625");
//     const [categorySelect, setCategorySelect] = useState("Суп");

//     const ProductInCategori = (arrprod) => {
//         // console.log('arrprod ', arrprod);
//         console.log('categoryIndex ', categoryIndex);
//         console.log('categorySelect ', categorySelect);
//         const check = arrprod.filter(function(item){return item.type_dishes === categorySelect; })
//         // console.log('check ', check);
//         return false;
//     }
//     return (
//         <View>
//         </View>
//     )
// }

// const CategoryViewSet2 = (props) => {
//     return (        
//         <View>            
//             {/* <View style={styles.contain_0}> 
//                 <FlatList data={props.product} 
//                               renderItem={({item}) =><Card product={item}/> }
//                               keyExtractor={(item) => item.id.toString()}                    
//                 /> */}
//                 {/* { console.log(categorySelect, ' + ', props.product, ' = ', categorySelect === props.product.type )} */}
//                 {/* { ProductInCategori(props.product) ? //categorySelect ===
                    
//                     <FlatList data={props.product} 
//                               renderItem={({item}) =><Card product={item}/> }
//                               keyExtractor={(item) => item._id}                    
//                 />//:
//                 //     <Text>
//                 //         Hui
//                 //     </Text>
//                 // } */}
//             {/* </View> */}
//         </View>    
//     )

// }

// const styles = StyleSheet.create({
//     categoryContainer:{
//         marginTop:10,
//         marginLeft: 5,
//         marginRight: 10,
//         paddingRight: 20,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         // flexShrink: 1        
//     },
    
//     ////
//     contain_0:{
//         height: HEIGHT/ 2.6,
//         // marginBottom: 0,
//     },
//     contain_banner:{
//       alignItems: 'center',
//     },
    
//     contain_2:{
//         flexShrink: 1,
//         marginBottom: 130,
//         // backgroundColor: 'gold'
//     },
//     img: {
//         width : 331,
//         height : 160
//     },
//     container: {
//         marginRight: 5,
//         marginLeft: 5,
//         marginBottom: 5,
//         flexDirection: 'row',
//         backgroundColor: '#FFFFFF',
//         backgroundColor: 'gold',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//     },
//     categorText: {
//         fontSize: SIZES.h3,
//         marginTop: 10,
//         color: COLORS.gray,
//         // backgroundColor: 'gold',
//         textAlign: 'center',
//     },
//     categorTextSelected: {
//         color: COLORS.green,
//         paddingBottom: 5,
//         borderBottomWidth: 2,
//         borderColor: COLORS.green,
//     }

// })

// // export default CategoryList
