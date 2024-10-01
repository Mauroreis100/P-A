import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
const Layout = () => {
  const [isLogin, setIsLogin]=useState(true);
  return (
    <>
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: true,
          title: 'Log In',
          headerBackVisible:false,
          headerBackTitleStyle: { fontSize: 30 },
          headerStyle: {
            backgroundColor: '#073F82',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, 
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          headerShown: true,

          title: 'Sign Up',
          headerBackTitleStyle: { fontSize: 30 },
          headerStyle: {
            backgroundColor: '#073F82',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, 
        }}
      />
    </Stack>
    <StatusBar backgroundColor="#161622" style="light" />
  </>
  )
}

export default Layout

const styles = StyleSheet.create({})