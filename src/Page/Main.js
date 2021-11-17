import React, {useState, Component} from 'react';
import { StyleSheet, Text,Image, View, SafeAreaView} from 'react-native';
// import {globalStyle} from '../../style/style';
import {Categories, Header,Footer} from '../components/';
import Banner from '../../assets/images/banner.svg';

export default class Main extends Component {
    render() {
        return (
            <SafeAreaView>
                <Header/>        
                <View style={{alignItems: 'center'}}>
                    <Banner width={331} height={160} />
                </View>
                <Categories/>
                <Text >Привет Дима!</Text>
                <Footer/>
            </SafeAreaView>
        )
    }
}