// CustomDrawerContent.js

import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Button, Text } from 'react-native';
import { AuthContext } from '../contexts/AuthContext'; // Use your AuthContext or relevant context
import { router } from 'expo-router';
import { logoutUser } from '@/api/authFunctions';
const CustomDrawerContent = (props) => {
  const { user,logout } = useContext(AuthContext); // Example: Using AuthContext to log out

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* Your custom button */}
      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <Button title="Log Out" onPress={()=>{
            logoutUser();
            logout;
            console.log(user)
            router.navigate("/sign-in");            
        }
        } />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
