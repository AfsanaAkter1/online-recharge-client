import React, { useState, useEffect } from "react";
import initializeAuthentication from "../../Components/firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //register user using email and password
  const registerUser = (email, password, name, location, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        //update user profile after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //Sign in user using email and password
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //Sign in User with google
  const signInUsingGoogle = (location, navigate) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setUser(result.user);
      })
      .catch((error) => setError(error.message));
  };
  //User observation
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setError("");
      } else {
        setUser("");
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  //signOut matheod
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setError("");
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    error,
    isLoading,
    setError,
    registerUser,
    loginUser,
    signInUsingGoogle,
    logout,
  };
};

export default useFirebase;
