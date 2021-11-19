import React, { useState, setState, Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image} from 'react-native';
// import {globalStyle} from '../../style/style';
import {Categories, Header,Footer, ProductCart} from '../components/';

// import Svg
import Banner from '../../assets/img_to_rn/banner';



// import { categories } from '../components/categor';//'./  ./categor';
// import { product } from '../components/categor';
const catergor_url = 'http://91.226.83.26:3001/dishType?token=8zCK8LQV7RXdjXa1';
const product_info_url = 'http://91.226.83.26:3001/dish?token=8zCK8LQV7RXdjXa1';

import { COLORS, SIZES, HEIGHT,WIDTHS} from '../../constants';

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
                        credentials: 'same-origin', // It can be include, same-origin, omit
                        headers: {
                            'Content-Type': 'application/json' // Your headers
                        }});
          const json = await response.json();
          this.setState({ catergor_data: json });
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

    // static getDerivedStateFromError(error) {
    //     // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    //     return { hasError: true };
    // } 

    render() {
        const {catergor_data, product_info} = this.state;
        return (
            <SafeAreaView>
                <Header/>        
                <View style={{alignItems: 'center'}}>
                    <Banner/>
                </View>
                <View> 
                    <ScrollView horizontal={true}
                        style={{marginTop:20, paddingBottom:6}}>
                        <View style={styles.contain}>
                            {catergor_data.map(item =>(<Categories data={item} key={item._id} />
                            ))}
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.contain_0}> 
                    <ScrollView horizontal={false}> 
                        <View style={styles.contain_2}>
                            {product_info.map(item => (<ProductCart product={item} key={item._id}/>))}
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    contain_0:{
        height: HEIGHT/ 1.6
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