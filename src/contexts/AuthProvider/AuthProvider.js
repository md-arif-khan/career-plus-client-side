import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

export  const AuthContext=createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    
  const googleLogin=(provider)=>{
    setLoading(true)
   return  signInWithPopup(auth,provider)
  }
  const githubLogin=(githubProvider)=>{
    setLoading(true)
   return signInWithPopup(auth,githubProvider)
  }
  const createUser=(email,password)=>{
    setLoading(true)
  return  createUserWithEmailAndPassword(auth,email,password)
  }
  const signIn=(email,password)=>{
    setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut=()=>{
    setLoading(true)
   return signOut(auth)
  }
  const updateUserProfile=(profile)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,profile)
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        console.log('auth state change')
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unsubscribe()
    }
  },[])
  
    const authInfo={user,googleLogin,createUser,signIn,loading,logOut,updateUserProfile,githubLogin}
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;