import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // You can use any icon library or your own icon

const SelectOptionModal = ({ onPress }) => {
  return (
    <>
    <TouchableOpacity style={styles.buttonA} onPress={onPress}>
      <Text>Achado</Text>
    </TouchableOpacity>
{/* ISTO VAI ME DAR PROBLEAS */}
    <TouchableOpacity style={styles.buttonP} onPress={onPress}>
      <Text>Perdido</Text>
    </TouchableOpacity>

    </>
    
  );
};

const styles = StyleSheet.create({
  buttonA: {
    position: 'absolute',
    bottom: 100,
    right: 30,
    backgroundColor: '#2196F3',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonP: {
    position: 'absolute',
    bottom: 170,
    right: 30,
    backgroundColor: '#2196F3',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default SelectOptionModal;
