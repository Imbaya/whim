import { StyleSheet, Text, View, Dimensions, ScrollView, Image, FlatList, TouchableOpacity, Button } from 'react-native'
import React,{ useState, useEffect, useRef } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { Icon } from 'react-native-elements'
import { filterData, carsAround } from '../global/data'
import MapView, { PROVIDER_GOOGLE, } from 'react-native-maps'
import {mapStyle} from "../global/mapStyle"
import { colors,parameters } from '../global/styles'
import { StatusBar } from 'expo-status-bar'
import * as Location from 'expo-location'

const SCREEN_WIDTH = Dimensions.get('window').width

const HomeScreen = ({navigation}) => {

const [latlng,setLatLng] = useState({})  
   
const checkPermission = async()=>{
  const hasPermission = await Location.requestForegroundPermissionsAsync();
  if(hasPermission.status === 'granted') {
    const permission = await askPermission();
    return permission
  }
  return true
};

const askPermission = async()=>{
  const permission = await Location.requestBackgroundPermissionsAsync();
  return permission.status === 'granted';
};


const getLocation = async()=>{
  try{
    const  {granted} = await Location.requestBackgroundPermissionsAsync();
    if(!granted)return;
    const {
      coords:{latitude,longitude},
    } = await Location.getCurrentPositionAsync();
    setLatLng({latitude:latitude,longitude:longitude})
  }catch(err){

  }
}

const _map = useRef(1);

useEffect(()=>{
  checkPermission();
  getLocation()
  console.log(latlng)
,[]})
  return (
    
    <View   >
             <View style = {styles.button1}></View>
                <View style={{alignItems:"center",justifyContent:"center"}}> 

              <View style = {styles.view1}>
                <Icon
                      type = "material-community"
                      name = "menu"
                      color = {colors.grey1}
                      size = {35} 
                      onPress={() => navigation.openDrawer()}
                />
                
                 
               

                  
            </View>
            <View style = {styles.btn1} >
              <Text style = {styles.txt1} onPress ={()=>{navigation.navigate("RequestScreen",{state:0})}}>HAMA NASI</Text>
                </View>




                <MapView
                    ref = {_map}
                    provider = {PROVIDER_GOOGLE}
                    style = {styles.map}
                    customMapStyle = {mapStyle}
                    showsUserLocation = {true}
                    followsUserLocation = {true}
                    initialRegion = {{...carsAround[0],latitudeDelta:0.008,longitudeDelta:0.008}}
                >
                    

                    {carsAround.map((item,index)=>
                    <MapView.Marker coordinate = {item} key= {index.toString()}>
                        <Image 
                            source = {require('../../assets/carMarker.png')}
                            style = {styles.carsAround}
                            resizeMode = "cover" 
                        />

                    </MapView.Marker>
                    
                    )

                    }

                </MapView>
                
                
              </View>
            
      <StatusBar style = "light" backgroundColor = "blue" translucent = {true} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    
  container:{
    flex:1
  },
  header:{
    height:parameters.headerHeight,
    alignItems:"flex-start"

  },
  image1:{

    height:100,
    width:100,

  },

  txt1:{
    width:200,
    paddingTop:1,
    fontSize:20,
    backgroundColor:"black",
    height:30,
    textAlign:"center"
  },

  image2:{height:60,width:60,
          borderRadius:30,   
        },

        home:{
          backgroundColor:"#2058c0",
          paddingLeft:20,

        },

        text1:{
          color:Colors.white,
          fontSize:21,
          paddingBottom:20,
          paddingTop:20
        },

        text2:{
          color:Colors.white,
          fontSize:16
        },

        view1:{
          position:"absolute",
          top:50,
          left:12,
          backgroundColor:colors.grey,
          height:40,
          width:40,
          borderRadius:20,
          justifyContent:"center",
          alignItems:"center",
          marginTop:2, 
          zIndex: 8
        },
        btn1:{
          
          top:100,
          left:12,
          height:40,
          width:300,
          borderRadius:1,
          justifyContent:"center",
          alignItems:"center",
          marginTop:2, 
          zIndex: 8
        },
        button1:{
          height:40,
          width:300,
          borderRadius:1,
          alignItems:"center",
          justifyContent:"center",
          marginLeft: 100,
          
   },

   button1Text:{
     color:Colors.white,
     backgroundColor: colors.grey,
     fontSize:17,
     marginTop:-2
   },
   card:{
     alignItems:"center",
     margin:SCREEN_WIDTH/22
   },

   view2:{marginBottom:5,
          borderRadius:15,
          backgroundColor:Colors.grey6  
          },

          title:{
            color:Colors.black,
            fontSize:16
          },

          view3:{
            flexDirection:"row",
            marginTop: 5,
            height:50,
            backgroundColor:Colors.grey6,
            alignItems:"center",
            justifyContent:"space-between",
            marginHorizontal: 15
          },
          text3:{
            marginLeft:15,
            fontSize:20,
            color:colors.black
          },
          view4:{
            flexDirection:"row",
            alignItems:"center",
            marginRight:15,
            backgroundColor:"white",
            paddingHorizontal:10,
            paddingVertical:2,
            borderRadius:20
          },

          view5:{
            flexDirection:"row",
            alignItems:"center",
            backgroundColor:"white",
            paddingVertical:25,
            justifyContent:"space-between",
            marginHorizontal:15,
            borderBottomColor:colors.grey4,
            borderBottomWidth:1,
            flex:1
          },

          view6:{
            alignItems:"center",
            flex:5,
            flexDirection:"row",
          },

          view7:{
            backgroundColor:colors.grey6,
            height:40,
            width:40,
            borderRadius:20,
            alignItems:"center",
            marginRight:20
          },

          map:{
            height:"100%",
            width: "100%"
          },

          text4:{
            fontSize:20,
            color:colors.black,
            marginLeft:20,
            marginBottom:20
          },

          icon1: {
            marginLeft:10,
            marginTop:30,
            paddingTop:50
          },
          view8: {
            flex:4,
            marginTop:-25
          },
          carsAround:{
            width: 28,
            height:14,

          },

          location:{
            width:16,
            height:16,borderRadius:8,
            backgroundColor:colors.blue,
            alignItems:"center",
            justifyContent:"center"
          },

          view9:{
            width:4,
            height:4,
            borderRadius:2,
            backgroundColor:color.white

          }
})