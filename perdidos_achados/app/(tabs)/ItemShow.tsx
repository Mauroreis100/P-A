import { StyleSheet, Text, View, Alert, Button } from 'react-native'
import React, { useEffect, useState }  from 'react'
import { collection, doc, addDoc,getDocs, getDoc,query,where,updateDoc, arrayUnion, arrayRemove, limit } from 'firebase/firestore';

import { db } from '../../api/firebaseConfig'; // 
import CustomButton from '@/components/CustomButton';
import Picture from '@/components/Picture';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const ItemShow = ({ route, navigation }) => {
    const objectoID=route.params.id;
    const getCurrentUser = () => {
      const auth=getAuth()
      return auth.currentUser;
    }
    const user=getCurrentUser();
    const [postCondition,setPostContidion]=useState(false)
    //TODO: See how well the variable works
    const [foto, setFoto]=useState({});
    const [selected,setSelected]=useState({})
    const PlaceholderImage = require('../../assets/images/no-photo.jpg');
    const [loading, setLoading] = useState(true);
    const [showAppOptions, setShowAppOptions] = useState(false);
    const [form, setForm] = useState({
      id:'',
        publicadorID: '',
        estado:'',
        foto:{},
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
              if(!((JSON.stringify(docSnap.data().foto)).match(''))){
                setFoto((docSnap.data().foto.assets[0].uri))
              }
              setForm({ ...form, 
                  id: objectoID,
                  publicadorID: docSnap.data().publicadorID,
                  estado:docSnap.data().estado,
                  foto:docSnap.data().foto,
                  data:docSnap.data().data,
                  localizacao:docSnap.data().localizacao,
                  email:docSnap.data().email,
                  nome:docSnap.data().nome,
                  numero: docSnap.data().numero 
              })
                if(user?.uid===docSnap.data().publicadorID){
                  setPostContidion(true);

                }
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

    const [reivindicacoes, setReivindicacoes] = useState({
      objectoID:form.id,
      usersID:[]
    });
  




const handleRetrieve = ()=>{
  Alert.alert("Espera aí",'Esta acção permite reivindicar o objecto da publicação, como forma de controlar todos que se dizem dono(a), os seus dados (nome e contacto) estarão disponíveis para o dono da publicação, mesmo que decida retornar o manifesto. E só o publicador pode remover. Pretende partilhar os teus dados com o publicador?',
    [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Continuar', onPress: async ()  => {
        //TODO: Colocar instruções que manda o current logged user ID para uma tabela de reidivicações do objecto
        //TODO: Reindivicações devem funcionai apenas para achados!     
        console.log("Continuar")    
        try{
          const docRef = doc(db, "reivindicacoes", objectoID);
          
          //  ACTUALIZANDO COM O ID DO DOCUMENTO, ONDE ESTÁ ESTE OBJECTO
          //  if (selected) {
            //const querySnapshot = await getDocs(collection(db,'reivindicacoes'));
            //const washingtonRef = doc(db, "reivindicacoes");

            
            const q = query(collection(db, "reivindicacoes"), where("objectoID", "==", objectoID),limit(1));
            const querySnapshot = await getDocs(q);

           querySnapshot.forEach(async (docs) => {
            const cityRef = doc(db, 'reivindicacoes', docs.id);
             await updateDoc(cityRef, {
                 usersID: arrayUnion(user?.uid)
             });
            console.log(docs.id, " => ", docs.data());
            
          });

          //}else{
          //FUNCIONA MUITO BEM, CASO NÃO EXISTA!!
          /*  console.log("Não existo, crie")
                    try {
                      const docRef = await addDoc(collection(db, 'reivindicacoes'), {
                      objectoID: form.id,
                      usersID:[user?.uid],
                      createdAt: new Date(),
                    });
                    console.log('Document written with ID: ', docRef.id); //O OBJECTO PODE SER O ÚNICO ID
                  } catch (e) {
                    console.error('Error at retrieve document: ', e);
                    Alert.alert('Error', 'Something went wrong while showing the Document');
                  }
                    */
          //}

          // Atomically add a new region to the "regions" array field.
          //const docSnap = await getDoc(docRef);
         /* if (docRef) {
            // Atomically add a new region to the "regions" array field.
              
          }else{
          } */
          }catch(e){
                console.log(e)
          }finally{

          } 
         Alert.alert("Estado",'Reivindicação adicionada',[{text: 'OK', onPress: async () => {
          console.log('OK Pressed')
          //TODO: A primeira vez vs outras vezes, criar só quando necessário.
          
           
          
           }},]) 


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
{postCondition ? <Picture foto={form.foto} titulo="Editar" estado={form.estado} nome={form.nome} data={form.data} localizacao={form.localizacao}></Picture>
    : <Picture foto={form.foto} titulo="Reivindicar" estado={form.estado} onPress={handleRetrieve} nome={form.nome} data={form.data} localizacao={form.localizacao}></Picture> }
    </View>
  )
}

export default ItemShow

const styles = StyleSheet.create({})