import React from 'react'
import { Text, View } from 'react-native'
import Logo from '../../assets/images/logo.svg';
import { COLORS, SIZES } from '../../constants';

const Header = () => {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<View>
            <Logo width={120} height={100} />				
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

export { Header }
