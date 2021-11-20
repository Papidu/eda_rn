import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Container } from '../components/Container'

export default OrderSpecificProduct = () =>{
    const navigation = useNavigation()

    const handleNavigateToProfile = () => {
        navigation.navigate('Profile');
    }


    return (
        <Container>
        </Container>
    )
}

const styles = StyleSheet.create({})
