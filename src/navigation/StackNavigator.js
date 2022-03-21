import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen'
import DestinationScreen from '../screen/DestinationScreen';
import ChargeScreen from '../screen/ChargeScreen';
import TripDetailScreen from '../screen/TripDetailScreen';

const Home = createNativeStackNavigator();

export function HomeStack() {
    return (
        <Home.Navigator>

            <Home.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />

            <Home.Screen
                name="Destination"
                component={DestinationScreen}
                options={{ headerShown: false }}
            />

            <Home.Screen
                name="ChargeScreen"
                component={ChargeScreen}
                options={{ headerShown: false }}
            />

            <Home.Screen
                name="TripDetail"
                component={TripDetailScreen}
                options={{ headerShown: false }}
            />

        </Home.Navigator>
    )
}