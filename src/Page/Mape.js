import React, {Component} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Mape()  {
    data = [{
      latitude:56.792137,
      longitude:60.620592
    }]
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                    initialRegion={{
                        latitude: 56.837872,
                        longitude: 60.659976,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        
                    }} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });