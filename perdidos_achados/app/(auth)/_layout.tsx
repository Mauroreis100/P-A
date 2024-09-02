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