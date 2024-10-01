import { Dimensions, ScrollView, Image,StyleSheet, Text, View } from 'react-native';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { db } from '../../api/firebaseConfig'; // 
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { registerUser } from '../../api/authFunctions'; // Adjust the path as necessary
import { images } from "../../constants";
const SignUp = () =>{
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    numero:"",
    password: "",
  });
  const handleRegister = async () => {
    try {
      const user = await registerUser(form.email, form.password);
      const id=user.uid;
      await setDoc(doc(db, "users", user.uid), {
        name: form.username,//Ver duplicatas de usuários?
        email: form.email,//Email é que não deve ser iguais...!
        numero: form.numero,
        role: 'user',  // Default role, could be customizable
        userID: id
      });
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
    <SafeAreaView className="bg-primary h-full">
    <ScrollView>

      <View className="w-full flex justify-center h-full px-4 my-6"
        style={{
          minHeight: Dimensions.get("window").height - 100,
        }}
      >
        <View className="flex items-center">
        <Image
            className="w-[40px] h-[40px]"
            resizeMode="contain"
            source={images.logoPA}
          />
          </View>
        <View className="bg-primary flex items-center justify-between">
         
        <FormField
            title="Nome"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
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
            title="Número de telefone"
            value={form.numero}
            handleChangeText={(e) => setForm({ ...form, numero: e })}
            otherStyles="mt-7"
            keyboardType="number"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Cadastrar"
            containerStyles="mt-8 w-80 bg-white"
            textStyles="text-primary"
           handlePress={handleRegister}
          />

        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})