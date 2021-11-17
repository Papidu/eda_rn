import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {globalStyle} from '../../style/style';  //style/style';


export default function Profile() {
    return (
        <View style={globalStyle.main}>
            <Text style={globalStyle.body}>Profile {'\n'}  word!</Text>    
        </View>
    );
  
}

const styles = StyleSheet.create({

});
