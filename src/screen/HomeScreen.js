import { StyleSheet, Text, View, Dimensions, StatusBar, Image, FlatList, TouchableOpacity, Button } from 'react-native'
//import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetFlatList, BottomSheetSectionList } from '@gorhom/bottom-sheet';
import React, { useContext, useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { Icon } from 'react-native-elements'
import MapView, { PROVIDER_GOOGLE, } from 'react-native-maps'
import { mapStyle } from "../global/mapStyle"
import { colors, parameters } from '../global/styles'
//import { StatusBar } from 'expo-status-bar'
import * as Location from 'expo-location'
import Card from '../components/card'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'

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


  const bottomSheet1 = useRef(1);

  const snapPoints1 = useMemo(() => ["5%", "25%"], [])

  const handleSheetChange1 = useCallback((index) => { }, [])



  return (

    <View style={styles.container}  >


      

      <View style={{ alignItems: "center", justifyContent: "center" }}>

        <View style={styles.icon}>
          <Icon
            type="material-community"
            name="menu"
            color={colors.black}
            size={45}
            onPress={() => navigation.openDrawer()}
          />

        </View>
     
       


      
        <MapView
          ref={_map}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={mapStyle}
          showsUserLocation={true}
          followsUserLocation={true}
          
        >
           
        
    
        </MapView>

       
     
       
         
         <Card style={styles.rqstbtn}>
         <TouchableOpacity style={styles.buttonview}       onPress={() => { navigation.navigate("Destination", { state: 0 }) }}>
        <View style= {styles.buttoncontent}>
        <Image
                        source={require('../../assets/OIP.jpg')}
                        style={styles.image}
                        resizeMode="cover" />

                        <View>
<TitleText>Transport with Us</TitleText>
</View>
</View>
</TouchableOpacity>
         </Card>

         
        
      </View>

      

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({




  container: {
    flex: 1,
    
    
  },


  image: {
    width: Dimensions.get('window').width * 0.09,
    height: Dimensions.get('window').width * 0.09,
    borderRadius: 150
},


  buttoncontent: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-around',
  },

 
buttonview: {
  flex: 1,
  alignItems: 'center'
},


  icon: {
    position: "absolute",
    top: Dimensions.get('window').height * 0.03,
    left: 12,
    height: 50,
    width: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 8,
   
  },


  rqstbtn  : {
    flex: 1,
    position: 'absolute',
    bottom: Dimensions.get('window').width * 0.06,
    zIndex: 30,
    width: Dimensions.get('window').width * 0.7,
 
    borderRadius: 100,
    height: Dimensions.get('window').width * 0.11,
},




 

  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
   
  },

  carsAround: {
    width: 28,
    height: 14,

  },

})