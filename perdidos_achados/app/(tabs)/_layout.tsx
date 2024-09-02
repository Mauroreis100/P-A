import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SignIn} from '../(auth)/sign-in';
import Home from "../(tabs)/home";
import Faq from "../(tabs)/faq";
import Publicar from './publicar';
import Contact_Info_Form from './contact_info_form';
import './gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthContext } from '@/contexts/AuthContext';
import CustomDrawerContent from '@/components/LogOutCustomDrawer';
const TabLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  function MyDrawer() {
    return (
      <Drawer.Navigator initialRouteName='Main' drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Main"component={Home} />
        <Drawer.Screen name="FAQ" component={Faq} />

      </Drawer.Navigator>
    )
  }
  function HomeStackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyDrawer} options={{ headerShown: false }}/>
        <Stack.Screen name="FAQ" component={Faq} />
        <Stack.Screen name="Publicar" component={Publicar} />
        <Stack.Screen name="Contact_Info" component={Contact_Info_Form} />
      </Stack.Navigator>
    );
  }
  return (
    <>

    <NavigationContainer independent={true}>
    <HomeStackNavigator />
  </NavigationContainer>
  </>
  )
}

export default TabLayout


const styles = StyleSheet.create({})