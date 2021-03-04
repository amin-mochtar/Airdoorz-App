import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchDestination from '../screens/destinationSearch/index'
import HomeTabNavigator from "./homeTabNavigation";
import GuestsScreen from '../screens/guest'
// import PostScreen from '../screens/'


const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={"Home"}
                    component={HomeTabNavigator}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name={"Destination"}
                    component={SearchDestination}
                    options={{title: 'Search Destination'}}
                />
                <Stack.Screen
                    name={"Guests"}
                    component={GuestsScreen}
                    options={{
                        title: "How many people?"
                    }}
                />
                {/* <Stack.Screen
                    name={"Post"}
                    component={PostScreen}
                    options={{
                        title: "Accommodation"
                    }}
                /> */}
                </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
