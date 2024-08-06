import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton';

const Publicar = () => {
    const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    data: "",
    localizacao:"",
    numeros:[],
    email:''
  });
  return (
    <SafeAreaView className="bg-primary justify-center items-center">
    <ScrollView
    contentContainerStyle={{
      height: "100%",
    }}
  >
      <FormField
      title="Nome do perdido"
      value={form.nome}
      handleChangeText={(e) => setForm({ ...form, nome: e })}
      otherStyles="mt-7">
      </FormField>
      <FormField
      title="Data do Perdido"
      value={form.nome}
      handleChangeText={(e) => setForm({ ...form, nome: e })}
      otherStyles="mt-7">
      </FormField>
      <FormField
      title="Localização"
      value={form.nome}
      handleChangeText={(e) => setForm({ ...form, nome: e })}
      otherStyles="mt-7">
      </FormField>
      <CustomButton
            title="Continuar"
            containerStyles="mt-8 w-80"/>
    </ScrollView>
        <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#073F82"/>
    </SafeAreaView>
  )
}

export default Publicar

const styles = StyleSheet.create({})