import React, { useState,useContext,useEffect } from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image } from 'react-native';

import { OriginContext, DestinationContext } from '../context/contexts'
import { colors, parameters } from '../global/styles'
import MapComponent from '../components/MapComponent'

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
 

   


    return (
        <View style={styles.screen}>

           <View style = {styles.mapview}>
               <MapComponent  userOrigin={userOrigin} userDestination={userDestination} />
           </View>

           <View style = {styles.driverview}>


           <View style = {styles.view10}>
             
           <Image
                     style = {styles.image2}
                     source = {require("../../assets/d9c73f381043ee7aa3af24f102d4bb1d.jpg")}
                 />

              <View>
                 <Text style = {styles.text7} > place  </Text>
                 <Text style = {styles.text6} > Time:      Distance:  Km </Text>
                 <Text style = {styles.text6} >   </Text>
                 <Text style = {styles.text1} > Fare :  Ksh </Text>
                 <Text style = {styles.text6} >   </Text>
             </View>
             
         </View>



           </View>



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
       height: '60%',
       
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
