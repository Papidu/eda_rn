import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { SIZES, WIDTH,HEIGHT } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { changeSelectedMarker } from '../features/dataMapSlice';
export default function Mape()  {
  const navigation = useNavigation()

  const handleNavigateMenu = () => {
      navigation.navigate('Menu');
  }
  // const [coordinates, setCoordinates] = useState(data[0].latlng)
  // const [Markers, setMarkers] = useState(data[0])
  const dispatch = useDispatch()
  const {data} = useSelector((state) => state.dataMap)
  const {selected_marker} = useSelector((state) => state.dataMap)
  console.log(selected_marker)
    return (
        <View style={styles.container}>            
            <View style={styles.board}>
              <Text>{selected_marker.title}</Text>
              <Text>{selected_marker.description}</Text>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity activeOpacity={1} style={styles.textBtn} onPress= {() => handleNavigateMenu() }>
                  <Text style={{color: 'white'}}>Заказать из этой столовой</Text>
                </TouchableOpacity>
              </View>
            </View>
            <MapView style={styles.map}
                    initialRegion={{
                        latitude: 56.837872,
                        longitude: 60.659976,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0921,                        
                    }}
                    onMarkerPress= {(e) =>{
                      // console.log('onMarkerPress  ', e.nativeEvent.coordinate);
                      const coordinate = e.nativeEvent.coordinate;
                      const marker = data.find(
                        m => m.latlng.latitude === coordinate.latitude && m.latlng.longitude === coordinate.longitude
                      );
                      console.log(coordinate)
                      // setCoordinates(coordinate);
                      
                      
                      if (marker) {
                        // console.log(marker)
                        dispatch(changeSelectedMarker(marker))
                      }
                    }}
                    onMarkerSelect={(e) =>{ 
                      const coordinate = e.nativeEvent.coordinate;
                      console.log(coordinate)
                      const marker = data.find(
                        m => m.latlng.latitude === coordinate.latitude && m.latlng.longitude === coordinate.longitude
                      );
                      console.log(coordinate)
                      if (marker) {
                        console.log(coordinate)
                        this.props.onMarkerPress(marker);
                      }}}
            >                
                {data.map((marker, index) => (
                    <Marker
                      key={index}
                      coordinate={marker.latlng}
                      title={marker.title}
                      // description={marker.description}
                      image={require('../../assets/images/marker.png')}
                    />
                  ))}
            </MapView>
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
    board:{
      backgroundColor: 'white',
      position: 'absolute',
      height: 212,
      width: WIDTH,
      bottom: 0,     
      borderTopLeftRadius: 25,
      borderTopRightRadius:25,
      padding:16,
      zIndex: 2,  
    },
    map: {
      width: WIDTH,
      height: HEIGHT,
    },
    textBtn:{      
      backgroundColor: '#05960B',
      margin:15,
      marginTop: 20,
      width: 330,
      height: 44,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
    }
  });