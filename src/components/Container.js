import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

import {useNavigation} from '@react-navigation/native'

export const Container =(props) => {
    const {children, showArrow=true} = props;
    const navigation = useNavigation()

    return (
        <View>
            <View style={{paddingVertical: 20, marginLeft:14}}>
                {showArrow && (
                    <TouchableOpacity onPress= {() => navigation.goBack() }>
                        <Text>
                            {'Back'}
                        </Text>
                    </TouchableOpacity>
                )}
                
            </View>
            <View style={{paddingHorizontal:16}}>
                 <Text>{children}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
