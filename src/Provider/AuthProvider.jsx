/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const handleRegister = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleGoogleSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      // console.log(loggedUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loader,
    handleRegister,
    handleLogin,
    handleGoogleSignIn,
    updateUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
