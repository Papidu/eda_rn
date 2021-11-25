import React, {Component} from 'react'
import { StyleSheet, Text, View, SafeAreaView,ScrollView, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, HEIGHT } from '../../constants'
import { Header} from '../components/';
import Categories from '../components/Categories';
import Banner from '../../assets/img_to_rn/banner';
import DishesItem from '../components/DishesItem';

const catergor_url = 'http://91.226.83.26:3001/dishType?token=8zCK8LQV7RXdjXa1';
const product_info_url = 'http://91.226.83.26:3001/dish?token=8zCK8LQV7RXdjXa1';
const all_url = 'http://10.241.13.136:8000/api/dishes';

export default class Main extends Component {

    state = {
        catergor_data: [],
        // lol: categories,
        product_info: [],
        all:[],
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
          const response = await fetch('http://10.241.13.136:8000/api/category/',{ 
                        method: 'GET',
                        mode:'no-cors',
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
      async getAll() {
        try {
          const response = await fetch(all_url,{ 
                        method: 'GET',
                        mode:'no-cors',
                        credentials: 'same-origin', // It can be include, same-origin, omit
                        headers: {
                            'Content-Type': 'application/json' // Your headers
                        }});
          const json = await response.json();
          this.setState({ all: json });
        } catch (error) {
          console.log('error',error);
        } finally {
          this.setState({ isLoading: false });
        }
      }
    componentDidMount() {
        this.getСatergor();
        // this.getProductInfo();
        this.getAll();
    }
    
    render() {
        const {catergor_data, product_info, all} = this.state;
        return (
            <SafeAreaView style={{backgroundColor: '#E4E4E4'}}>
                <Header/>        
                <View style={styles.contain_banner}>
                    <Banner width={331} height={160}/>
                </View>
                <Categories catergor={catergor_data}/>
                <ScrollView showsVerticalScrollIndicator={false} style={{height:380}}>
                  <DishesItem product={all}/>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    contain_banner:{
      alignItems: 'center',
    }    
})