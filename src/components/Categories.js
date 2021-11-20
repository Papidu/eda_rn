import React from 'react';
import { StyleSheet, Image, Text, TouchableHighlight, View, ScrollView } from 'react-native';

import { COLORS, HEIGHT, SIZES,WIDTH } from '../../constants';
// import { categories } from './categor';

const Categories = ({ data }) => {
    // console.log(data); 
    const {group,name} = data;
	return (
        <View style={styles.container}>        
            <TouchableHighlight underlayColor={COLORS.secondary} onPress={() => alert('Pressed!')}>
                <View> 
                    <Text style={styles.textT}>{ group } </Text>
                </View>
            </TouchableHighlight>      
        </View>
	)
}

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
        marginLeft: 5,
        flexDirection: 'row',
        // backgroundColor: '#FFFFFF',
        // backgroundColor: 'gold'
        // flexWrap: 'wrap',
        // justifyContent: 'center',
    },
    cover: {
        width: WIDTH /3.4,
        height: HEIGHT * 0.2
    },
    textT: {
        fontSize: SIZES.h3,
        marginTop: 10,
        // backgroundColor: 'gold',
        textAlign: 'center',
    }
})

export { Categories }