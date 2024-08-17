import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "../api/firebaseConfig"
import Home from './(tabs)/home';
import SignIn from './(auth)/sign-in';
const Render = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    
      });
  
      return () => unsubscribe();
    }, []);
  
    return user ? <Home navigation={null}/> : <SignIn />;
}

export default Render

const styles = StyleSheet.create({})