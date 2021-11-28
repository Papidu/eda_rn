import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import { COLORS, SIZES, HEIGHT,WIDTHS } from '../../constants';
import LogoSvg from '../../assets/img_to_rn/logo'
const HeaderMenu = () => {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				marginTop: 25, 
				// backgroundColor: '#faf9f9'//'#f7f5f2',
			}}
		>
			<View style={styles.container_logo}>				
				<LogoSvg/>				
			</View>
			<View style={{paddingRight: 10}}>
                <Text style={{textAlign: 'right', fontSize: SIZES.h4}}>
                    Вы заберёте заказ из
                </Text>
                <Text style={{fontSize: SIZES.h4, color: COLORS.green }}>Название столовой, Адрес</Text>                
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
