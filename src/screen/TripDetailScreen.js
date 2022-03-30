import React, { useContext, useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image } from 'react-native';
import BottomSheet, { BottomSheetFlatList, BottomSheetSectionList } from '@gorhom/bottom-sheet';
import { colors, parameters } from '../global/styles'
import MapComponent from '../components/MapComponent'
import { OriginContext, DestinationContext } from '../context/contexts'
const TripDetailScreen = ( { route: { params } }) => {

   const { id } = params;
    
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
 

   const bottomSheet1 = useRef(1);

  const snapPoints1 = useMemo(() => ["5%", "30%"], [])

  const handleSheetChange1 = useCallback((index) => { }, [])



    return (
        <View style={styles.screen}>

           <View style = {styles.mapview}>
               <MapComponent  userOrigin={userOrigin} userDestination={userDestination}  />
           </View>

           <BottomSheet
        ref={bottomSheet1}
        index={1}
        snapPoints={snapPoints1}
        onChange={handleSheetChange1}
      >




          </BottomSheet>



        </View>
    );
};

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        
      
       
    },

    image2:{height:80,width:80 },

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

   mapview:{
       height: '100%',
       
   },

   driverview:{
   
   flex: 1,
    backgroundColor: 'grey',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 8,
},

text1: {
    marginLeft: 10,
    fontSize: 20,
    color: colors.grey1,
    fontWeight: "bold"
  },

  

});

export default TripDetailScreen;
