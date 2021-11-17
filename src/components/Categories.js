import React from 'react'
import { Image, Text, TouchableHighlight, View, ScrollView } from 'react-native'

import { COLORS, SIZES } from '../../constants';
import { categories } from './categor';

const Categories = () => {
	return (
        <View
            style={{
                marginTop: 30,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}
        >
        {categories.map((cat, idx) => (
            <View
                key={`categories ${idx}`}
                style={{
                    width: '30%',
                    marginBottom: 20,
                }}
            >
            <ScrollView horizontal ={true}>
                    <TouchableHighlight
                        underlayColor={COLORS.secondary}                        
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text
                                style={{
                                    fontSize: SIZES.h4,
                                    marginTop: 10,
                                    textAlign: 'center',
                                }}
                            >
                                {cat.name_cat}
                            </Text>
                        </View>
                    </TouchableHighlight>
            </ScrollView>
            </View>
        ))}
    </View>
	)
}

export { Categories }
