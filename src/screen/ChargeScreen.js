import { StyleSheet, Image, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect, useRef, useMemo, useCallback } from 'react'
import BottomSheet, { BottomSheetFlatList, BottomSheetSectionList } from '@gorhom/bottom-sheet';
import { colors, parameters } from '../global/styles'
import MapComponent from '../components/MapComponent'
import { Avatar, Icon } from 'react-native-elements'
import { OriginContext, DestinationContext } from '../context/contexts'
import { rideData } from '../global/data'
import Card from '../components/card'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


export default function ChargeScreen({ navigation, route }) {



  const { origin, dispatchOrigin } = useContext(OriginContext)
  const [userOrigin, setUserOrigin] = useState({
    latitude: origin.latitude,
    longitude: origin.longitude
  })
  const { destination, dispatchDestination } = useContext(DestinationContext)
  const [userDestination, setUserDestination] = useState({
    latitude: destination.latitude,
    longitude: destination.longitude
  })

  useEffect(() => {
    setUserOrigin({
      latitude: origin.latitude,
      longitude: origin.longitude
    });
    setUserDestination({
      latitude: destination.latitude,
      longitude: destination.longitude
    })
  }, [origin, destination])



  return (
    <View style={styles.container}>

      <View style={styles.view1}>
        <Icon
          type="material-community"
          name="home"
          color={colors.grey1}
          size={35}
          onPress={() => { navigation.navigate("HomeScreen") }}
        />

      </View>

      <MapComponent userOrigin={userOrigin} userDestination={userDestination} />



      
      <Card style={styles.view00} distance= '21'/>
    





    </View>

  )
}


const styles = StyleSheet.create({

  contentContainer: {
    flex: 1,
    alignItems: 'center',

  },
  view10: {
  //  alignItems: "center",
    flex: 5,
  //  flexDirection: "row",
    paddingVertical: 10,
    borderBottomColor: colors.grey5,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  //  paddingLeft: 10,
    
    
  },

  image2: { height: 80, width: 80 },

  bottomview: {
    flex: 1,
    zIndex: 8
  },

  container: {
    flex: 1,
    paddingTop: parameters.statusBarHeight,
    //  borderBottomRightRadius: 300
  },


  text6: {
    fontSize: 15,
    color: colors.black,
    fontWeight: "bold",
    paddingLeft: 10
  },

  text7: {
    fontSize: 28,
    color: colors.black,
    marginRight: 5,
    fontWeight: "bold",
    paddingLeft: 5

  },

  text1: {
    marginLeft: 10,
    fontSize: 20,
    color: colors.grey1,
    fontWeight: "bold"
  },

  view1: {
    position: "absolute",
    top: Dimensions.get('window').height * 0.05,
    left: 12,
    backgroundColor: colors.white,
    height: 45,
    width: 45,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 8
  },

  view00: {
    width: Dimensions.get('window').width,
    height: SCREEN_HEIGHT * 0.8,
    position: "absolute",
    bottom: 0
  },

  test: {}

})



