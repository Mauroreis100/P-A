import { StyleSheet, Text, View,ScrollView,StatusBar, Modal, FlatList } from 'react-native'
import React, { isValidElement, useEffect, useState } from 'react'
import { Redirect, router } from "expo-router";
import Picture from '../../components/Picture';
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingButton from '@/components/FloatingButton';
import SelectOptionModal from '@/components/SelectOptionModal';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../api/firebaseConfig'; // 
import ListItem from '@/components/ListItem';
const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch data from Firestore
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'objecto')); // Replace 'your_collection_name' with your actual collection name
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
            <SelectOptionModal onPress={() => navigation.navigate('Publicar',{objectoState:'perdido'})} />
        </Modal>
      <ScrollView>
            <View className="items-center">
            <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
       <ListItem estado={item.estado} name={item.nome} date={item.data}/>
        )}
      />
   
            </View>
         </ScrollView>
         <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#073F82"/>
         <FloatingButton onPress={() => setModalVisible(!modalVisible)} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})