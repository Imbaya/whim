import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, } from 'react-native';




const TripDetailScreen = props => {
    const catId = props.navigation.getParam('itemId');
    
      const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
      );

   


    return (
        <View style={styles.screen}>

           
<Text>{catId}</Text>


        </View>
    );
};

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        padding: 40,
        alignItems: 'center',
        backgroundColor: '#fbfbfb'
    },

    buttonCard: {
        marginVertical: Dimensions.get('window').height / 80,
    },

    buttonView: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.85,
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },

    bottomNav: {
        position: 'absolute',
        bottom: Dimensions.get('window').width * 0.02,
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.45,
        justifyContent: 'space-between',
        borderRadius: 100,
        height: Dimensions.get('window').width * 0.14,
    }

});

export default TripDetailScreen;
