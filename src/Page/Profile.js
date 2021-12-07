import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Container } from '../components/Container';

export default function Profile() {
    const navigation = useNavigation()

    const handleNavigateToProfile = () => {
        navigation.navigate('OrderSpecificProduct');
    }
    return (
        <Container showArrow={false}>
            <View style={{marginTop:30}}>
                <TouchableOpacity onPress= {() => handleNavigateToProfile() }>
                    <Text>
                        Посмотреть секретную страницу
                    </Text>                
                </TouchableOpacity> 
                <Text>
                    Модуль находится в разработке 
                </Text> 
            </View>
        </Container>
    );  
}

const styles = StyleSheet.create({

});


   


    