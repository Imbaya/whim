import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Avatar, Icon } from 'react-native-elements'
import { colors, parameters } from '../global/styles'
import { GOOGLE_MAPS_APIKEY } from "@env";
import { OriginContext, DestinationContext } from '../context/contexts'




const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;



const DestinationScreen = ({ navigation }) => {

  const { dispatchOrigin } = useContext(OriginContext);
  const { dispatchDestination } = useContext(DestinationContext);
  const textInput1 = useRef(4);
  const textInput2 = useRef(5);

  const [destination, setDestination] = useState(false)

  return (
    <>
      <View style={styles.container}>
        <View style={styles.view2}>

          <TouchableOpacity onPress={() => { navigation.navigate("HomeScreen") }}>
            <View style={styles.view1}>
              <Icon
                type="material-community"
                name="arrow-left"
                color={colors.blue}
                size={35}

              />
            </View>
          </TouchableOpacity>


        </View>
        <View style={styles.input}>
          {destination === false &&

            <GooglePlacesAutocomplete
              nearbyPlacesAPI='GooglePlacesSearch'
              placeholder='From...'
              listViewDisplayed="auto"
              debounce={400}
              currentLocation={true}
              ref={textInput1}
              minLength={2}
              enablePoweredByContainer={false}
              fetchDetails={true}
              autoFocus={true}
              styles={autoComplete}
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: "en"
              }}

              onPress={(data, details = null) => {
                dispatchOrigin({
                  type: "ADD_ORIGIN", payload: {
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                    address: details.formatted_address,
                    name: details.name
                  }
                })
                setDestination(true)
              }}
            />
          }

          {destination === true &&
            <GooglePlacesAutocomplete
              nearbyPlacesAPI='GooglePlacesSearch'
              placeholder='Going to...'
              listViewDisplayed="auto"
              debounce={400}
              currentLocation={true}
              ref={textInput2}
              minLength={2}
              enablePoweredByContainer={false}
              fetchDetails={true}
              autoFocus={true}
              styles={autoComplete}
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: "en"
              }}

              onPress={(data, details = null) => {
                dispatchDestination({
                  type: "ADD_DESTINATION", payload: {
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                    address: details.formatted_address,
                    name: details.name
                  }
                })
                navigation.navigate("ChargeScreen", { state: 0 })

              }}

            />
          }


        </View>

      </View>
    </>
  )
}

export default DestinationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20
  },

  input: {
    width: Dimensions.get('window').width * 0.95,
    borderColor: 'blue'
  },

  view1: {
    position: "absolute",
    top: 50,
    left: 12,
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 10

  },

  view3: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: colors.white,
    height: 30,
    zIndex: 10

  },

  view2: {
    backgroundColor: colors.grey6,
    zIndex: 4,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },

  view24: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    paddingHorizontal: 20
  },

  view25: {
    flexDirection: 'row',
    alignItems: "baseline"
  },

  flatlist: {
    marginTop: 20,
    zIndex: 17,
    elevation: 8
  },

});


const autoComplete = {

  textInput: {
    backgroundColor: colors.grey6,
    height: 50,

    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 30,
    borderColor: colors.grey6,


  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: colors.white,

  },

  textInputContainer: {
    flexDirection: 'row',
  }

}