import { StyleSheet, Text, View, Alert, Button } from 'react-native'
import React, { useEffect, useState }  from 'react'
import { collection, doc, addDoc, getDoc } from 'firebase/firestore';

import { db } from '../../api/firebaseConfig'; // 
import CustomButton from '@/components/CustomButton';
import Picture from '@/components/Picture';
const ItemShow = ({ route, navigation }) => {
    const objectoID=route.params.id;
    
    const [loading, setLoading] = useState(true);
    const [showAppOptions, setShowAppOptions] = useState(false);
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
const handleRetrieve = ()=>{
  Alert.alert("Espera aí",'Esta acção permite reivindicar o objecto da publicação, como forma de controlar todos que se dizem dono(a), os seus dados (nome e contacto) estarão disponíveis para o dono da publicação, mesmo que decida retornar o manifesto. E só o publicador pode remover. Pretende partilhar os teus dados com o publicador?',
    [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Continuar', onPress: () => {
        //TODO: Colocar instruções que manda o current logged user ID para uma tabela de reidivicações do objecto

         Alert.alert("Estado",'Reivindicação adicionada',[{text: 'OK', onPress: async () => console.log('OK Pressed')},]) 
        //TODO:Esconder tela a seguir antes do Ok.
        Alert.alert("Contactos:",`Formas de contacto:\nEmail:${form.email} \nTelemóvel: ${form.numero}`)
      } 
    },
    ]
  );
 

  
    /*
    Esta acção permite-nos controlar todos que se dizem todos do objecto... (ser ou n reversível?)
    E só o dono da publicação pode retirar, e significa que irá partilhar os teus dados
    com a pessoa que...

    , pretende continuar?

    Claim adicionado!

    Formas de contacto com a pessoa que encontrou?
    Email: link
    Phone: link

    */
}

    useEffect(() => {
        getObjecto();
    }, []); 
  if (loading) {
    return <Text>Carregando</Text>;
  }
  return (
    <View>
    <Picture estado={form.estado} onPress={handleRetrieve} nome={form.nome} data={form.data} localizacao={form.localizacao}></Picture>
    </View>
  )
}

export default ItemShow

const styles = StyleSheet.create({})