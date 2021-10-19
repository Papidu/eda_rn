import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {globalStyle} from '../style/style';


export default function Menu() {
    return (
    <View style={globalStyle.main}>
    <Text style={globalStyle.body}>Menu {'\n'}
    word!</Text>
    <Text style={globalStyle.body}>Menu {'\n'}
    word!</Text>
    <Text style={globalStyle.body}>Menu {'\n'}
    word!</Text>
    <Text style={globalStyle.body}>Привет Дима!</Text>
    </View>
    );
  
}

const styles = StyleSheet.create({

});
