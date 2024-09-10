import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../api/firebaseConfig'; // 
import { getAuth } from "firebase/auth";
import ListItem from '@/components/ListItem';
const MinhasPublicacoes = ({navigation}) => {
  const getCurrentUser = () => {
    const auth=getAuth()
    return auth.currentUser;
  }
  const user=getCurrentUser();
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // Function to fetch data from Firestore
    const fetchData = async () => {
      try {
        const q = await query(collection(db, "objecto"), where("publicadorID", "==", user?.uid)); // Replace 'your_collection_name' with your actual collection name
        const querySnapshot = await getDocs(q);
        const documents = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(documents);
  
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []); 
    if (loading) {
      return <Text>Carregando</Text>;
    }
  return (
    <ScrollView>
    <View className="items-center">
    <FlatList
data={data}
keyExtractor={item => item.id}
renderItem={({ item }) => (
  <ListItem estado={item.estado} name={item.nome} date={item.data} onPress={()=>{
    //TODO: COlocar pagination contada tipo mostrar só 10 itens p/ day
 console.log(item.id)
 navigation.navigate('ItemShow',{id:item.id})
}
}/>
)}
/>

    </View>
 </ScrollView>
  )
}

export default MinhasPublicacoes

const styles = StyleSheet.create({})