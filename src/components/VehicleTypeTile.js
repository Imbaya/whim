import { StyleSheet,Image, Text, View, Dimensions,TouchableOpacity } from 'react-native'
import React, {useContext, useState,useEffect,useRef,useMemo,useCallback} from 'react'
import BottomSheet, { BottomSheetFlatList,BottomSheetSectionList } from '@gorhom/bottom-sheet';
import { colors,parameters } from '../global/styles'
import {dis} from '../screen/ChargeScreen'

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const VehicleTypeTile = props => {
  
    return (
        
            <View style={{ ...styles.gridItem, ...props.style }}>
               <TouchableOpacity onPress={props.onSelect}>
               <View style = {styles.view10}>
               <Image
                     style = {styles.image2}
                     source = {props.image}
                 />
              <View>
                 <Text style = {styles.text7} > {props.vehicleType}  </Text>
                 <Text style = {styles.text6} > Time:  {props.time}  Distance: {props.distance} Km </Text>
                 <Text style = {styles.text6} >   </Text>
                 <Text style = {styles.text1} > Fare : {props.fare} Ksh </Text>
                 <Text style = {styles.text6} >   </Text>
             </View>
             
         </View>

         </TouchableOpacity>

            </View>

      
    );
};

const styles = StyleSheet.create({
 

    text6: {
        fontSize: 15,
        color: colors.black,
        fontWeight: "bold",
        paddingLeft: 10
    },

    image2:{height:80,width:80 },
    text7: {
        fontSize: 28,
        color: colors.black,
        marginRight: 5,
        fontWeight: "bold",
        paddingLeft: 5

    },

    gridItem: {
        flex: 1,
        margin: 15,
        width: Dimensions.get('window').width
       
     //   height: 150,
       // borderRadius: 10,
      //  overflow:
        //  Platform.OS === 'android' && Platform.Version >= 21
        //    ? 'hidden'
       //     : 'visible',
     //   elevation: 5
      },
    view10: {
        alignItems: "center",
        flex: 5,
        flexDirection: "row",
        paddingVertical: 10,
        borderBottomColor: colors.grey5,
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        paddingLeft: 10,
        height: '100%'

    },

    text1: {
        marginLeft: 10,
        fontSize: 20,
        color: colors.grey1,
        fontWeight: "bold"
    },

    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

});

export default VehicleTypeTile;
