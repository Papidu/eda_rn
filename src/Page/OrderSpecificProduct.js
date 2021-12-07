import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Container } from '../components/Container'


const OrderSpecificProduct = () => {
    const navigation = useNavigation()

    const handleNavigateToProfile = () => {
        navigation.navigate('Profile');
    }
    return (
        <Container>
            <Text>
                Шутка, пока всё в разработке
            </Text>
        </Container>
    )
}

export default OrderSpecificProduct

