import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import Home from "../(tabs)/home";
import Faq from "../(tabs)/faq";
import './gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
const TabLayout = () => {
  const Drawer = createDrawerNavigator();
  function StackNavigator() {
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
    </Stack>
    <StatusBar backgroundColor="#161622" style="light" />
  </>
  )
  }
  function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="FAQ" component={Faq} />
      </Drawer.Navigator>
    )
  }
  return (
    <NavigationContainer independent={true}>
    <MyDrawer />
  </NavigationContainer>
  )
}

export default TabLayout

const styles = StyleSheet.create({})