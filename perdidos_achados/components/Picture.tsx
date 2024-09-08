import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { icons } from "../constants";
import { Link } from 'expo-router';
import CustomButton from './CustomButton';
const Picture = (props) => {
  const template = 'https://i5.walmartimages.com/asr/85a53698-2b3c-48b1-a238-52541ddb3ccd_1.4e374eb556fc18086b0b6bc1b08f94ee.jpeg?odnHeight=717&odnWidth=717&odnBg=FFFFFF'
  /* 
     <CustomButton title={buttonTight} containerStyles="w-48 mt-4"/>
     Só renderiza se for owner da coisa.
     */
  return (
  <View>
        <View className="flex flex-col space-y-3 justify-center mb-8">
          <Image
          style={[styles.tinyLogo]}
            source={{ 
              uri: props.foto 
             }}
          />

        <Text className="font-bold mt-6">{props.nome}</Text>
        <Text className="text-sm sm:text-wrap italic mt-4 truncate">{props.descricao}</Text>
        <Text className="text-sm italic mt-4 truncate">Localização do {props.estado}: {props.localizacao}</Text>
        <Text className="text-sm italic mt-4 truncate">{props.data}</Text>
          <CustomButton handlePress={props.onPress} title={props.titulo} containerStyles="w-48 mt-4"/>
          </View>
                    
  </View>
  )
}

export default Picture

const styles = StyleSheet.create({
  container: {
    borderWidth: 100,
    borderRadius:0,

  },
  tinyLogo: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: '#073F82'
  },
  logo: {
    width: 66,
    height: 58,
  },
});