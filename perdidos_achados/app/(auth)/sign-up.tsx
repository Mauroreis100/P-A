import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { registerUser } from '../../api/authFunctions'; // Adjust the path as necessary

const SignUp = () =>{
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleRegister = async () => {
    try {
      const user = await registerUser(form.email, form.password);
      console.log('Registered user:', user);
      router.replace('/home');
    } catch (error) {
      if(error.code==="auth/email-already-in-use"){
        alert("Email already in use. Please choose a different email.");
      }else if(error.code==="auth/weak-password"){
        alert("Palavra-passe fraca. Por-favor insira uma mais forte.");
      }else{
        console.error('Registration failed:', error.message);
        
      }
    }
  };

  return (
   <SafeAreaView className="">
        <View className="bg-white h-1/6 justify-center items-center">
          <Text>P & A</Text>
        </View>
        <View className="br-white h-1/6 justify-center items-center flex flex-row gap-4">
        <View className="flex justify-center pt-5 flex-row gap-2">
            
            <Link href="/sign-in" className="text-lg font-psemibold  text-gray-100  ">
              Sign In
            </Link>
        </View>
        <View className="flex justify-center pt-5 flex-row gap-2">
        <Text className="text-lg font-psemibold text-secondary  underline decoration-4 underline-offset-8 ">
              Sign Up
            </Text>
        </View>
        </View>
        <View className="bg-primary h-4/6 justify-center items-center">
        <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
          />
        <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Cadastrar"
            containerStyles="mt-8 w-80"
           handlePress={handleRegister}
          />
        </View>
      </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})