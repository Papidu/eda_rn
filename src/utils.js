import { View, Text } from 'react-native'

export default function getTotalPrice(item) {
    return item.reduce((acc, prod) => acc +=  parseInt(prod.price, 10),0)
}

    