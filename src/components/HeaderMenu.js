import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import { COLORS, SIZES, HEIGHT,WIDTHS } from '../../constants';
import LogoSvg from '../../assets/img_to_rn/logo';
import { useNavigation } from '@react-navigation/core'
import { useSelector, useDispatch } from 'react-redux';
import { changeSelectedMarker } from '../features/dataMapSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
const HeaderMenu = () => {
	const navigation = useNavigation()

	const handleNavigateMap = () => {
		navigation.navigate('Map');
	}
	const {selected_marker} = useSelector((state) => state.dataMap)
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				marginTop: 25, 
			}}
		>
			<View style={styles.container_logo}>				
				<LogoSvg/>				
			</View>
			<View style={{paddingRight: 10}}>
                <Text style={{textAlign: 'right', fontSize: SIZES.h4}}>
                    Вы заберёте заказ из
                </Text>
				<TouchableOpacity activeOpacity={1} onPress= {() => handleNavigateMap() }>
                	<Text style={{fontSize: SIZES.h4, color: COLORS.green }}>Итерия Е-Да! {selected_marker.title}</Text>    
				</TouchableOpacity>            
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container_logo:{
		marginLeft: 10,
		marginTop: 5,
		marginBottom: 12
	},
	img:{
		width : 120,
		height : 100				
	}

})
export { HeaderMenu }
