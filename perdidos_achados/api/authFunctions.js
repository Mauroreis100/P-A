
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Adjust the path as necessary


// Register a new user
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //await sendEmailVerification();
    console.log('User registered:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

/* 
export const sendEmailVerification= async()=>{
  const user =auth.currentUser;
  try{
    sendEmailVerification(auth.currentUser,{
      handleCodeInApp: true,
      url: '',
    }).then(()=>{
      showEmailAlert(user.email);
    })
  }catch(error){
    const errorCOde=error.code;
    const errorMEssage=error.errorMessage;
    console.error("Email verification error:", errorCode, errorMessage);
    throw error;
  }
} 
*/

// Log in an existing user
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('Error logging in user:', error.message);
    throw error;
  }
};

// Log out the current user
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log('User logged out');
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};

//AuthContext

