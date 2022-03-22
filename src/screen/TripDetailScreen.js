import React, { useContext, useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image } from 'react-native';
import BottomSheet, { BottomSheetFlatList, BottomSheetSectionList } from '@gorhom/bottom-sheet';
import { colors, parameters } from '../global/styles'


const TripDetailScreen = ( { route: { params } }) => {

   const { id } = params;
    

   const bottomSheet1 = useRef(1);

  const snapPoints1 = useMemo(() => ["5%", "30%"], [])

  const handleSheetChange1 = useCallback((index) => { }, [])



    return (
        <View style={styles.screen}>

           <View style = {styles.mapview}>
               
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
