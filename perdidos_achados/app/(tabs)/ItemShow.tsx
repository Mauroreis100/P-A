import { StyleSheet, Text, View, Alert, Button } from 'react-native'
import React, { useEffect, useState }  from 'react'
import { collection, doc, addDoc, getDoc } from 'firebase/firestore';

import { db } from '../../api/firebaseConfig'; // 
import CustomButton from '@/components/CustomButton';
import Picture from '@/components/Picture';
const ItemShow = ({ route, navigation }) => {
    const objectoID=route.params.id;
    
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({
        estado:'',
        foto:'',
        nome:'',
        data:'',
        localizacao:'',
        numero:"",
        email:""
      });
      const getObjecto = async ()=>{
        try{
            const docRef = doc(db, "objecto", objectoID);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setForm({ ...form, 
                    estado:docSnap.data().estado,
                    foto:docSnap.data().estado,
                    data:docSnap.data().data,
                    localizacao:docSnap.data().localizacao,
                    email:docSnap.data().email,
                    nome:docSnap.data().nome,
                    numero: docSnap.data().numero 
                })
               
              } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
              }
      }catch(e){
        console.error('Error adding document: ', e);
        Alert.alert('Error', 'Something went wrong while retrieving the Document');
      }finally {

        setLoading(false);
      }
    }

    useEffect(() => {
        getObjecto();
    }, []); 
  if (loading) {
    return <Text>Carregando</Text>;
  }
  return (
    <View>
    <Picture nome={form.nome}></Picture>
    </View>
  )
}

export default ItemShow

const styles = StyleSheet.create({})