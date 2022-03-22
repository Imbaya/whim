import { StyleSheet, Image, Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext, useState, useEffect, useRef, useMemo, useCallback } from 'react'
import BottomSheet, { BottomSheetFlatList, BottomSheetSectionList } from '@gorhom/bottom-sheet';
import { colors, parameters } from '../global/styles'
import MapComponent from '../components/MapComponent'
import { Avatar, Icon } from 'react-native-elements'
import { OriginContext, DestinationContext } from '../context/contexts'
import { carTypeData } from '../global/data'
import VehicleTypeTile from '../components/VehicleTypeTile'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { getDistance } from 'geolib';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


export default function ChargeScreen({ navigation, route }) {



  const renderVehicleItem = itemData => {
    return (
      <VehicleTypeTile
      image= {itemData.item.image}
        vehicleType={itemData.item.vehicleType}
        time={itemData.item.time}
        distance={itemData.item.distance}
        fare={itemData.item.fare}
        onSelect={() => { navigation.navigate("TripDetail" ,  { id: itemData.item.id }) }}




        
      //   onSelect={() => {
      //   props.navigation.navigate({
      //  routeName: 'CategoryMeals',
      // params: {
      //   categoryId: itemData.item.id
      //   }
      //   });
      //  }}
      />
    );
  };



  const bottomSheet1 = useRef(1);

  const snapPoints1 = useMemo(() => ["20%", "40%"], [])

  const handleSheetChange1 = useCallback((index) => { }, [])





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


  const dis = getDistance(
    {
      latitude: origin.latitude,
      longitude: origin.longitude
    },
    {
      latitude: destination.latitude,
      longitude: destination.longitude
    },
  );


  //(Math.ceil(dis/1000)/5) * 5) ;
  const distance1 = (Math.ceil(dis / 1000) / 5) * 5;
  const fare1 = (Math.ceil(distance1 * 60) / 5) * 5;
  const fare2 = (Math.ceil(distance1 * 150) / 5) * 5;
  const fare3 = (Math.ceil(distance1 * 200) / 5) * 5;

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


      <View style={styles.test}>
        <MapComponent userOrigin={userOrigin} userDestination={userDestination} />

      </View>


      <BottomSheet
        ref={bottomSheet1}
        index={1}
        snapPoints={snapPoints1}
        onChange={handleSheetChange1}
      >
        <View style={styles.contentContainer}>


          <BottomSheetFlatList
            data={carTypeData}
            keyExtractor={(item, index) => item.id}
            renderItem={renderVehicleItem}
     
            numColumns={1}
          />



        </View>
      </BottomSheet>


    </View>



  )
}


const styles = StyleSheet.create({

  contentContainer: {
    flex: 1,
    alignItems: 'left',
    width: '100%'

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

  contentContainer: {
    flex: 1,
    alignItems: 'center',
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
    height: '25%',
    position: "absolute",
    bottom: 0,
    backgroundColor: 'blue',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },

  test: {
    height: '80%'
  }

})



