import { StyleSheet, Text, View, Dimensions, ScrollView, Image, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Icon } from 'react-native-elements'
import { filterData, carsAround } from '../global/data'
import MapView, { PROVIDER_GOOGLE, } from 'react-native-maps'
import { mapStyle } from "../global/mapStyle"
import { colors, parameters } from '../global/styles'
import { StatusBar } from 'expo-status-bar'
import * as Location from 'expo-location'
import { BlurView } from 'expo-blur';

const SCREEN_WIDTH = Dimensions.get('window').width

const HomeScreen = ({ navigation }) => {

  const [latlng, setLatLng] = useState({})

  const checkPermission = async () => {
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if (hasPermission.status === 'granted') {
      const permission = await askPermission();
      return permission
    }
    return true
  };

  const askPermission = async () => {
    const permission = await Location.requestBackgroundPermissionsAsync();
    return permission.status === 'granted';
  };


  const getLocation = async () => {
    try {
      const { granted } = await Location.requestBackgroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLatLng({ latitude: latitude, longitude: longitude })
    } catch (err) {

    }
  }

  const _map = useRef(1);

  useEffect(() => {
    checkPermission();
    getLocation()
    console.log(latlng)
      , []
  })
  return (

    <View style={styles.container}  >
      

      <View style={{ alignItems: "center", justifyContent: "center" }}>

        <View style={styles.view1}>
          <Icon
            type="material-community"
            name="menu"
            color={colors.grey1}
            size={45}
            onPress={() => navigation.openDrawer()}
          />

        </View>
        <View style={styles.test}></View>
        <TouchableOpacity style={styles.btn1} onPress={() => { navigation.navigate("Destination", { state: 0 }) }}>
          <View  >
            <Text style={styles.txt1} >TRANSPORT WITH US</Text>
          </View>
        </TouchableOpacity>


      
        <MapView
          ref={_map}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={mapStyle}
          showsUserLocation={true}
          followsUserLocation={true}
          initialRegion={{ ...latlng, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
        >

          {carsAround.map((item, index) =>
            <MapView.Marker coordinate={item} key={index.toString()}>
              <Image
                source={require('../../assets/carMarker.png')}
                style={styles.carsAround}
                resizeMode="cover"
              />
            </MapView.Marker>

          )
          }
    
        </MapView>
     
        
        
      </View>

      <StatusBar style="light" backgroundColor="white" translucent={true} />

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 20,
    
  },

 

  txt1: {
    width: 250,
    paddingTop: 1,
    fontSize: 20,
    color: colors.grey1,
    fontWeight: "bold",
    height: 30,
    textAlign: "center"
  },

  view1: {
    position: "absolute",
    top: Dimensions.get('window').height * 0.025,
    left: 12,
    height: 50,
    width: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 8
  },

  btn1: {
    top: Dimensions.get('window').height * 0.98,
    left: Dimensions.get('window').width * 0.015,
    height: 40,
    width: Dimensions.get('window').width * 0.7,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    backgroundColor: colors.grey,
    zIndex: 8
  },

  map: {
    height: "100%",
    width: "100%",
   
  },

  carsAround: {
    width: 28,
    height: 14,

  },

})