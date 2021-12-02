import { View, Text } from 'react-native'

export default function getAllPrice(item) {
    return item.reduce((acc, prod) => acc +=  parseInt((prod.price*prod.count), 10),0)
}

    