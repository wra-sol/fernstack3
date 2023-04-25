import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { setPersistence, browserLocalPersistence } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    // Set persistence on initialization
    setPersistence(auth, browserLocalPersistence);

    return () => unsubscribe();
  }, []);

  const signOut = () => {
    auth.signOut();
    navigate('/login');
  }
  
  return (
    <AuthContext.Provider value={{ currentUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
