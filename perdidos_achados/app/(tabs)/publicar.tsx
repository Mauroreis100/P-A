import { SafeAreaView, Modal, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
//TODO: Colocar o 
const Publicar = ({ route, navigation }) => {
  const { objectoState } = route.params;
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    data: "",
    localizacao:"",
    numeros:[],
    email:""
  });
  const objState=`Nome do ${objectoState}`
  const [date, setDate] = useState(dayjs());
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView className="bg-primary justify-center items-center">
    <ScrollView
    contentContainerStyle={{
      height: "100%",
    }}
  >
      <FormField
      title={objState}
      value={form.nome}
      handleChangeText={(e) => setForm({ ...form, nome: e })}
      otherStyles="mt-7">
      </FormField>
      <FormField
      title="Data e hora da ocorrência"
      value={form.data}
      handleChangeText={(e) => setForm({ ...form, data: e })}
      otherStyles="mt-7">
      </FormField>

    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}
    >
      <View style={styles.centeredView}>
<View style={styles.modalView}>

<DateTimePicker
        mode="single"
        date={date}
        onChange={(params) => {
          setDate(params.date)
          setForm({ ...form, data: dayjs(date).format('DD/MM/YY - HH:MM')})
          console.log(date)
        }}
        timePicker='true'
  
      />
      <CustomButton
            title="Close"
            containerStyles="mt-8 w-80"
            handlePress={() => setModalVisible(!modalVisible)}/>
</View>
      </View>
    </Modal>
 <CustomButton
            title="Select Data"
            containerStyles="mt-8 w-80"
            handlePress={() => setModalVisible(!modalVisible)}/>
      <FormField
      title="Localização"
      value={form.localizacao}
      handleChangeText={(e) => setForm({ ...form, localizacao: e })}
      otherStyles="mt-7">
      </FormField>
      <CustomButton
            title="Próximo"
            containerStyles="mt-8 w-80"
            handlePress={() => navigation.navigate('Contact_Info',{form})}/>
    </ScrollView>
        <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#073F82"/>
    </SafeAreaView>
  )
}

export default Publicar

const styles = StyleSheet.create({  centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
},
modalView: {
  margin: 20,
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
}})