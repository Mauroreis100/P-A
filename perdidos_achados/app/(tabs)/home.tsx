import { StyleSheet, Text, View,ScrollView,StatusBar, Modal } from 'react-native'
import React, { useState } from 'react'
import { Redirect, router } from "expo-router";
import Picture from '../../components/Picture';
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingButton from '@/components/FloatingButton';
import SelectOptionModal from '@/components/SelectOptionModal';
const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView className="bg-grey ">
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={true}
       
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
<SelectOptionModal onPress={() => navigation.navigate('Publicar',{
  objectoState:'achado'
})} />
<SelectOptionModal onPress={() => navigation.navigate('Publicar',{
  objectoState:'perdido'
})} />
          
        </Modal>
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
         <FloatingButton  onPress={() => setModalVisible(!modalVisible)} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})