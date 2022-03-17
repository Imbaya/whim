import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeStack } from './StackNavigator'
import { Icon } from 'react-native-elements'
import { colors } from '../global/styles'


const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name = "HomeStack"
                component = {HomeStack}
                options = {{
                    title:"ACCOUNT",
                    drawerIcon : ({focused,size})=><Icon type="material-community" 
                                                         name = "account"
                                                         color = {focused?'#7cc':colors.grey2}
                                                         size = {100}
                                                         
                                                          />,  
                     headerShown : false
                     
                }}
            />
             <Drawer.Screen
                name = "Home"
                component = {HomeStack}
                options = {{
                    title:"Home",
                    drawerIcon : ({focused,size})=><Icon type="material-community" 
                                                         name = "home"
                                                         color = {focused?'#7cc':colors.grey2}
                                                         size = {size}
                                                         
                                                          />,  
                     headerShown : false
                     
                }}
                onPress ={()=>{navigation.navigate("RequestScreen",{state:0})}}
            />
             <Drawer.Screen
                name = "Settings"
                component = {HomeStack}
                options = {{
                    title:"Notifications",
                    drawerIcon : ({focused,size})=><Icon type="material-community" 
                                                         name = "bell"
                                                         color = {focused?'#7cc':colors.grey2}
                                                         size = {size}
                                                         
                                                          />,  
                     headerShown : false
                     
                }}
            />
             <Drawer.Screen
                name = "Notification"
                component = {HomeStack}
                options = {{
                    title:"Settings",
                    drawerIcon : ({focused,size})=><Icon type="material-community" 
                                                         name = "cog-sync"
                                                         color = {focused?'#7cc':colors.grey2}
                                                         size = {size}
                                                         
                                                          />,  
                     headerShown : false
                     
                }}
            />
             <Drawer.Screen
                name = "Promotions"
                component = {HomeStack}
                options = {{
                    title:"Promotions",
                    drawerIcon : ({focused,size})=><Icon type="material-community" 
                                                         name = "credit-card-outline"
                                                         color = {focused?'#7cc':colors.grey2}
                                                         size = {size}
                                                         
                                                          />,  
                     headerShown : false
                     
                }}
            />
        </Drawer.Navigator>
    )
}