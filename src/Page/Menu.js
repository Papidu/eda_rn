import React, {Component} from 'react'
import { StyleSheet, Text, View, SafeAreaView,ScrollView, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, HEIGHT } from '../../constants'
import {Categories, Header,Footer, ProductCart} from '../components/';
import Banner from '../../assets/img_to_rn/banner';
import CategoryList from '../components/CategoryList';
import Card from '../components/Card';

const catergor_url = 'http://91.226.83.26:3001/dishType?token=8zCK8LQV7RXdjXa1';
const product_info_url = 'http://91.226.83.26:3001/dish?token=8zCK8LQV7RXdjXa1';


export default class Main extends Component {

    state = {
        catergor_data: [],
        // lol: categories,
        product_info: [],
    }
    async getProductInfo() {
        try {
          const response = await fetch(product_info_url,{ 
                        method: 'GET',
                        mode:'no-cors',
                        credentials: 'same-origin', // It can be include, same-origin, omit
                        headers: {
                            'Content-Type': 'application/json' // Your headers
                        }});
          const json = await response.json();
        //   console.log(json);
          this.setState({ product_info: json });
        } catch (error) {
          console.log(error);
        } finally {
          this.setState({ isLoading: false });
        }
      }
    async getСatergor() {
        try {
          const response = await fetch(catergor_url,{ 
                        method: 'GET',
                        mode:'no-cors',
                        credentials: 'same-origin', // It can be include, same-origin, omit
                        headers: {
                            'Content-Type': 'application/json' // Your headers
                        }});
          const json = await response.json();
          this.setState({ catergor_data: json });
        //   console.log(json);
        //   console.log('wrqwfqwrqwe');
        } catch (error) {
          console.log(error);
        } finally {
          this.setState({ isLoading: false });
        }
      }
    
    componentDidMount() {
        this.getСatergor();
        this.getProductInfo();
    }
    
    render() {
        // const navigation = useNavigation()
        // const handleNavigateToProfile = () => {
        //     navigation.navigate('OrderSpecificProduct');
        // }
        const {catergor_data, product_info} = this.state;
        // console.log(catergor_data);
        // console.log('aaaaaaaaaaaaa');
        // catergor_data.map(item =>(console.log(item.group, item._id)))
        return (

            <SafeAreaView>
                <Header/>        
                <View style={styles.contain_banner}>
                    <Banner width={331} height={160}/>
                </View>
                <View> 
                    <CategoryList data={catergor_data} product={product_info} />
                </View>
                <View style={styles.contain_0}> 
                    {/* <FlatList data={product_info} 
                            renderItem={({item}) =><Card product={item}/> }
                            keyExtractor={(item) => item._id}                    
                    /> */}

                    {/* <ScrollView horizontal={false}> 
                        <View style={styles.contain_2}>
                            {product_info.map(item => (<ProductCart product={item} key={item._id}/>))}
                        </View>
                    </ScrollView> */}
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    contain:{
      marginTop:10,
    },
    contain_0:{
        height: HEIGHT/ 1.6
    },
    contain_banner:{
      alignItems: 'center',
    },
    contain: {
        marginLeft: 5,
        flexDirection: 'row',
        flexShrink: 1
    },
    contain_2:{
        flexShrink: 1,
        marginBottom: 130,
        // backgroundColor: 'gold'
    },
    img: {
        width : 331,
        height : 160
    }

})