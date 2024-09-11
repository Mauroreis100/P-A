import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ListItem from '@/components/ListItem'

const showReivindicacoes = ({ route, navigation }) => {
    console.log(route.params.reivindicacoes)
    const [reivindicacoes, setReinvindicacoes]=useState({
       objectoID: route.params.reivindicacoes.objectoID,
        usersID: route.params.reivindicacoes.usersID
    })
    console.log(reivindicacoes.objectoID)
    //TODO: Mostrar detalhes como o dia de reivindicação, nome, email e número.
    
return (
    <View>
        
        <FlatList
             data={reivindicacoes.usersID}
             keyExtractor={item => item.id}
             renderItem={({ item }) => (
               <ListItem name="Mauro Mahassa" onPress={()=>{
                Alert.alert("Mauro Mahassa", 'Nome: Mauro Mahassa\nEmail: mauro@email.com\nNúmero: 873020', [{
                    text: 'Fechar', onPress: async () => {
                      console.log('OK Pressed')
                    }
                  },])
            }
           }/>
         )}
         />
    </View>
  )
}

export default showReivindicacoes

const styles = StyleSheet.create({})