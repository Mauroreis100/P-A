import { Alert, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ListItem from '@/components/ListItem'
import { collection, doc, addDoc, getDocs, getDoc, query, where, updateDoc, arrayUnion, arrayRemove, limit } from 'firebase/firestore';
import { db } from '../../api/firebaseConfig'; // 
const ShowReivindicacoes = ({ route, navigation }) => {
    const [reivindicacoes, setReinvindicacoes]=useState({
       objectoID: route.params.reivindicacoes.objectoID,
        usersID: route.params.reivindicacoes.usersID,
        createdAt: route.params.reivindicacoes.createdAt,
      })
      console.log(reivindicacoes.usersID)
      const [userData, setUserData] = useState([]);
      const [loading, setLoading] = useState(true);
     
      //TODO: Mostrar detalhes como o dia de reivindicação, nome, email e número.

      useEffect(() => {
        const getUsers = async (users) => {
          const results = [];
    
          for (const id of users) {
            const docRef = doc(db, "users", id);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
              results.push(docSnap.data());
            } else {
              // Handle missing document (optional)
            }
          }
    
          setUserData(results);
        };
      setLoading(false)
        getUsers(reivindicacoes.usersID); // Call getUsers on component mount or update
      }, [reivindicacoes.usersID]); // Re-run useEffect if userIDs change

if (loading) {
        return <Text>Loading...</Text>; // Animação de loading
      }

   
   return (
     <SafeAreaView className="bg-grey ">
        <ScrollView>
        <View className="items-center">
        <FlatList
         data={userData}
         keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ListItem name={item.name} data={item.createdAt} onPress={()=>{
                //PEDIR NÚMERO AO FAZER LOG-IN, OU NA REIVINDICAÇÃO?
                //TODO: FIX DATA
               Alert.alert("Detalhes", `Nome: ${item.name}\nEmail: ${item.email}\nNúmero: 845008414`, [{
                   text: 'Fechar', onPress: async () => {
                     console.log('OK Pressed')
                   }
                 },])
                 }
          }/>
        )}
        />
        </View>
</ScrollView>
</SafeAreaView>
        
  )
}

export default ShowReivindicacoes

const styles = StyleSheet.create({})