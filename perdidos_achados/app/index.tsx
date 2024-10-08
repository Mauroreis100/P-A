import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import React, { useContext } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../api/firebaseConfig'; // 
import { AuthContext } from "@/contexts/AuthContext";

const Welcome = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <SafeAreaView className="bg-white">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="">
          <View className="bg-primary h-96 rounded-b-full justify-center items-center">
            <Text className="text-white text-xl">P & A</Text>
          </View>

        </View>

        <View className="w-full h-full px-6">
          <View className="pt-40">
            {/* Isso aqui vai me dar stress */}
            <CustomButton
              handlePress={() => {
                if (user) {
                  console.log(user)
                  router.push("/home")
                } else {
                  router.push("/sign-in")
                }
              }
              }
              title="Começar"
              containerStyles="w-full mt-7"
              containerStyles="bg-primary" 
              textStyles="text-white"
            />


          </View>
        </View>
      </ScrollView>
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#073F82" />
    </SafeAreaView>
  )
}

export default Welcome

