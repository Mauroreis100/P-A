import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../(tabs)/home";
import Faq from "../(tabs)/faq";
import Publicar from './publicar';
import './gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
const TabLayout = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
/*   function StackNavigator() {
    return(
    <>
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="faq"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="publicar"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
    <StatusBar backgroundColor="#161622" style="light" />
  </>
  )
  } */
  function MyDrawer() {
    return (
      <Drawer.Navigator initialRouteName='Main'>
        <Drawer.Screen name="Main" component={Home} />
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