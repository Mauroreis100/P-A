import { StyleSheet, Text, View,ScrollView,StatusBar } from 'react-native'
import React from 'react'
import { Redirect, router } from "expo-router";
import Picture from '../../components/Picture';
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingButton from '@/components/FloatingButton';
const Home = ({navigation}) => {
  return (
    <SafeAreaView className="bg-grey ">
      <ScrollView>
            <View className="items-center">
        <Picture nome="Pasta da Nikes" descricao="Perdido no dia 24-07-2024 em frente da biblioteca.sssssssssss"></Picture>
        <Picture nome="Pasta da Nikes" descricao="Perdido no dia 24-07-2024 em frente da biblioteca.sssssssssss"></Picture>
        <Picture nome="Pasta da Nikes" descricao="Perdido no dia 24-07-2024 em frente da biblioteca.sssssssssss"></Picture>
        <Picture nome="Pasta da Nikes" descricao="Perdido no dia 24-07-2024 em frente da biblioteca.sssssssssss"></Picture>
        <Picture nome="Pasta da Nikes" descricao="Perdido no dia 24-07-2024 em frente da biblioteca.sssssssssss"></Picture>
        <Picture nome="Pasta da Nikes" descricao="Perdido no dia 24-07-2024 em frente da biblioteca.sssssssssss"></Picture>
            </View>
         </ScrollView>
         <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#073F82"/>
         <FloatingButton  onPress={() => navigation.navigate('Publicar')} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})