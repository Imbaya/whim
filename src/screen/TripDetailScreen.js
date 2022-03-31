import React, { useContext, useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image } from 'react-native';
import BottomSheet, { BottomSheetFlatList, BottomSheetSectionList } from '@gorhom/bottom-sheet';
import { colors, parameters } from '../global/styles'
import MapComponent from '../components/MapComponent'
import { OriginContext, DestinationContext } from '../context/contexts'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'


const TripDetailScreen = ({ route: { params } }) => {

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

    const snapPoints1 = useMemo(() => ["5%", "25%"], [])

    const handleSheetChange1 = useCallback((index) => { }, [])



    return (
        <View style={styles.screen}>

            <View style={styles.mapview}>
                <MapComponent userOrigin={userOrigin} userDestination={userDestination} />
            </View>

            <BottomSheet
                ref={bottomSheet1}
                index={1}
                snapPoints={snapPoints1}
                onChange={handleSheetChange1}
            >
                <View style={styles.statusview}>
                    <TitleText>Your Driver is on the way</TitleText>
                </View>

                <View style={styles.product}>



                    <Image
                        source={require('../../assets/plqce.jpg')}
                        style={styles.image}
                        resizeMode="cover" />

                    <View style={styles.productDetails}>





                        <TitleText style={styles.textstyle}>Driver's Name: John</TitleText>
                        <TitleText style={styles.textstyle}>Vehicle Model: Toyota Hilux</TitleText>
                        <TitleText style={styles.textstyle}>Registration n.o: KCG 199U</TitleText>
                        <TitleText style={styles.textstyle}>Phone number: 0715222222</TitleText>
                        <TitleText style={styles.textstyle}>Rating: 4.5/5</TitleText>

                    </View>



                </View>

            </BottomSheet>



        </View>
    );
};

const styles = StyleSheet.create({

    screen: {
        flex: 1,



    },

    statusview: {
        alignItems: 'center',
        paddingBottom: 10
    },


    textstyle: {
        paddingTop: 10,
        color: 'black',
fontWeight: '900'
    },

    product: {
        padding: 5,
        flexDirection: 'row',
        height: Dimensions.get('window').width * 0.4,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 3
    },

    productDetails: {
        marginHorizontal: 50
    },



    image: {
        width: Dimensions.get('window').width * 0.35,
        height: Dimensions.get('window').width * 0.35,
        borderRadius: 150
    },

    image2: { height: 80, width: 80 },

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

    mapview: {
        height: '100%',

    },

    driverview: {

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
