import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
const SignIn = () =>{
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
   <SafeAreaView className="">
        <View className="bg-white h-1/6 justify-center items-center">
          <Text>P & A</Text>
        </View>
        <View className="br-white h-1/6 justify-center items-center flex flex-row gap-4">
        <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg font-psemibold text-secondary  underline underline-offset-8">
              Sign In
            </Text>
        </View>
        <View className="flex justify-center pt-5 flex-row gap-2">
            <Link href="/sign-up" className="text-lg font-psemibold text-gray-100">
              Sign up
            </Link>
        </View>
        </View>
        <View className="bg-primary h-4/6 justify-center items-center">
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
            title="Entrar"
            containerStyles="mt-8 w-80"
           
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
          <Link href="/home" className="text-lg font-psemibold text-secondary  underline underline-offset-8">
              Entrar como convidado
            </Link>
        </View>
        </View>
      </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})