import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { SIZES } from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation()
    
    const handleNavigateToMenu = () => {
        navigation.navigate('Menu');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Корзина</Text>
            <TouchableOpacity onPress={() => handleNavigateToMenu()}>
                <AntDesign name="closecircleo" style={styles.icon} size={24} color="gray" />            
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:16,
        flexDirection:'row', 
        justifyContent: 'center',
        alignItems: 'flex-start', 
        elevation:0, 
        width:340,
        marginLeft:20,
        marginBottom:20,
    },
    text: {
        // backgroundColor: 'gold',
        textAlign: 'center',
        fontSize: SIZES.h1,
        flexGrow: 5,
        
    },
    icon:{
        flexGrow:2,
        marginTop: 4,
        marginRight: 8,
        // marginRight: 'auto',
        // zIndex:1,
        // elevation: 1,
        // position: 'absolute'
        
    }
})
