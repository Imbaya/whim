import { StyleSheet, Image, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { colors, parameters } from '../global/styles'
import MapComponent from '../components/MapComponent'
import { Avatar, Icon } from 'react-native-elements'
import { OriginContext, DestinationContext } from '../context/contexts'
import Card from '../components/card'




const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;





export default function RequestScreen({ navigation, route }) {
  const [content, setContent] = useState();


  const bottomHandler = () => {
    setContent(<Card style={styles.view00} />)
  };


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

      <View style={styles.view2}>


        <View style={styles.view1}>
          <Icon
            type="material-community"
            name="arrow-left"
            color={colors.grey1}
            size={35}
            onPress={() => { navigation.navigate("HomeScreen") }}
          />

        </View>

        <TouchableOpacity onPress={() => { navigation.navigate("Destination") }




        }>
          <View style={styles.view6}>
            <Text style={styles.text1}>From Where ? </Text>
          </View>
        </TouchableOpacity >



      </View>

      <View>
        <MapComponent
          userOrigin={userOrigin} userDestination={userDestination}
        />
      </View>




    </View>


  )
}




const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: parameters.statusBarHeight,
    //  borderBottomRightRadius: 300
  },


  view1: {
    //position:"absolute",
    //top:50,
    //left:12,
    backgroundColor: colors.white,
    height: SCREEN_HEIGHT * 0.04,
    width: SCREEN_HEIGHT * 0.04,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SCREEN_HEIGHT * 0.01,
    zIndex: 8

  },

  view2: {
    height: SCREEN_HEIGHT * 0.11,
    paddingTop: parameters.statusBarHeight,
    width: Dimensions.get('window').width,
    alignItems: "center",
    zIndex: 5,
    backgroundColor: colors.white,
    paddingBottom: 10,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'space-around',
    overflow: 'hidden',
    flexDirection: 'row',
    position: "absolute",

  },

  view4: {
    alignItems: "center",
  },

  view6: {
    backgroundColor: colors.grey6,
    width: SCREEN_WIDTH * 0.80,
    height: SCREEN_HEIGHT * 0.04,
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 10,
    borderColor: colors.grey6

  },
  text1: {
    marginLeft: 10,
    fontSize: 20,
    color: colors.grey1,
    fontWeight: "bold"
  },

  button2: {
    height: 50,
    backgroundColor: colors.grey10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: 30
  },


})



