import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomButton from "../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/api/firebaseConfig';
import { AuthProvider } from '../contexts/AuthContext'; 
const RootLayout = () => {
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState(null);

  return (
    <AuthProvider>
      <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="render" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
    </AuthProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})