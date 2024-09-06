import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
    <View className="py-3 ">
       <View className="flex flex-row w-96 bg-white h-20">
        <View className="bg-primary">
          <View classNane="bg-primary fixed">
            <Text className="capitalize text-gray-200 py-6 px-5">{props.estado}</Text>
          </View>
        </View>
        <View className="">
          <View classNane="">
            <View className="px-3">
            <Text className="capitalize text-blue-500 py-1 text-2xl">{props.name}</Text>
            <Text className="font-serif text-gray-500 py-1 text-xs">Quarta-feira, 20 de Agosto de 2024</Text>
            </View>
          </View>
        </View>
        <View className="bg-secondary absolute inset-y-0 right-0 px-4">
        <View classNane="fixed">
          <Text className="text-gray-200 py-6 px-2">?</Text>
            <Text className="text-gray-200 py-6 px-2">?</Text>
          </View>
  
        </View>
    </View>
    </View>
    </TouchableOpacity>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    width: 2,
    height: 2,
  },
})