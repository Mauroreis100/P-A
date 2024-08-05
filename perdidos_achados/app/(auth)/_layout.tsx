import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
const Layout = () => {
  return (
    <>
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
    <StatusBar backgroundColor="#161622" style="light" />
  </>
  )
}

export default Layout

const styles = StyleSheet.create({})