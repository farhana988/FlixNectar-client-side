/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register

    const registerUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

  // sign in
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };


  //   update profile

const manageProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image,
      })
  };
  //   logout

const handleSignOut = ()=>{
    setLoading(true)
     return signOut(auth)
  }

    const authInfo = {
        user,
        setUser,
        registerUser,
        signIn,
        // signInWithGoogle,
        handleSignOut,
        manageProfile,
        loading,
       
      };

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        
          if (currentUser) {
            setUser(currentUser);
          } else {
            setUser(null);
          }
          setLoading(false);
    
          return () => {
            unsubscribe();
          };
        });
      }, []);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;