import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
const SignIn = () =>{
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
   <SafeAreaView className="bg-primary h-full">
       <ScrollView>
        <View>
          
        </View>
       </ScrollView>
      </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})