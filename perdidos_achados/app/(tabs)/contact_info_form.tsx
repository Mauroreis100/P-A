import { SafeAreaView, Modal, ScrollView, StatusBar, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { router } from 'expo-router';
import { collection, addDoc,setDoc,doc } from 'firebase/firestore';
import { db } from '../../api/firebaseConfig'; // 
import { getAuth, onAuthStateChanged } from "firebase/auth";

//TODO: COlocar quem foi o user que publicou o item

const Contact_Info_Form = ({ route, navigation }) => {
const getCurrentUser = () => {
  const auth=getAuth()
  return auth.currentUser;
}
  const user = getCurrentUser();
  const itemDetails = route.params;
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    id: itemDetails.form.id,
    publicadorID: user?.uid,
    estado: itemDetails.form.estado,
    foto: itemDetails.form.foto,
    nome: itemDetails.form.nome,
    data: itemDetails.form.data,
    localizacao:itemDetails.form.localizacao,
    numero:itemDetails.form.numero,
    email:itemDetails.form.email
  });
  const { publicadorID,estado,foto,nome, data, localizacao,numero,email } = form;
  const handleSubmit = async () => {
    const newItem = {
      publicadorID,
      estado:'achado',
      foto,
      nome,
      data,
      localizacao,
      numero,
      email,
      createdAt: new Date(),
    };

    try {
      if(form.id){

        await setDoc(doc(db, 'objecto',form.id), newItem);
        console.log('Document written with ID: ', form.id);
      }else{
        const docRef = await addDoc(collection(db, 'objecto'), newItem);
        console.log('Document written with ID: ', docRef.id);
      }
      Alert.alert('Publicado com sucesso', 'Fazendo o mundo um melhor lugar...');
      navigation.navigate('Home')
    } catch (e) {
      console.error('Error adding document: ', e);
      Alert.alert('Error', 'Something went wrong while adding the Document'+e);
    }
  };
  return (
    <SafeAreaView className="bg-primary justify-center items-center">
    <ScrollView
    contentContainerStyle={{
      height: "100%",
    }}
  >

      <FormField
      title="Número de telemóvel para contacto"
      value={form.numero}
      handleChangeText={(e) => setForm({ ...form, numero: e })}
      otherStyles="mt-7">
      </FormField>

      <FormField
      title="E-mail para contacto"
      value={form.email}
      handleChangeText={(e) => setForm({ ...form, email: e })}
      otherStyles="mt-7">
      </FormField>

 <CustomButton
            title="Confirmar"
            containerStyles="mt-8 w-80"
            handlePress={()=>
              {
              handleSubmit()
            }}
            />

    </ScrollView>
        <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#073F82"/>
    </SafeAreaView>
  )
}

export default Contact_Info_Form

const styles = StyleSheet.create({  centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
},
modalView: {
  margin: 20,
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
}})