import React from 'react';
import {Text, View} from 'react-native'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import HomeScreen from './StackNavigation1.js'
import AboutScreen from '../Screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from '@rneui/themed';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator1(){
    return(
        <Drawer.Navigator
            initialRouteName="Home"
            useLegacyImplementation
            /*
            drawerStyle={{
                backgroundColor:'#ffff',
                width:'80%'
            }}
            */
            screenOptions={{//drawerContentOptions
                drawerStyle:{
                    backgroundColor:'#ffff',
                    width:'80%'
                },
                drawerActiveTintColor:"#9032bb",//activeTintColor
                drawerInactiveTintColor:"#060606"//inactiveTintColor
            }}
            drawerContent={(props)=>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props}/>
                    <View style={{flexDirection:'row', marginLeft: 20, marginTop:15}}>
                        <Ionicons name='md-exit' size={25} color={'#4B1C71'}/>
                        <Text style={{marginLeft:30}} onPress={()=>alert("Cerrando sesión")}>Cerrar sesión</Text>
                    </View>
                </DrawerContentScrollView>
            }
        
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown:false,
                    drawerLabel:"Inicio",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />

            <Drawer.Screen
                name="About"
                component={AboutScreen}
                options={{
                    headerShown:false,
                    drawerLabel:"Acerca de",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />

        </Drawer.Navigator>
    )
}