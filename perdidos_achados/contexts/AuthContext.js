import React, { createContext, useState, useEffect } from 'react';
import onASC from '../api/firebaseConfig';

import { getAuth, onAuthStateChanged } from "firebase/auth";

// Create a context for authentication
export const AuthContext = createContext();
const auth=getAuth();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold the user object

  useEffect(() => {
    // Set up a Firebase listener to manage user state
    const subscriber = onAuthStateChanged(auth, (user) => {
      console.log("LOGADO"+user);
      setUser(user);
    });

    return subscriber; // Unsubscribe on unmount
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user, // Provide the user object to context consumers
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.error(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.error(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
