import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../src/Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);
  // admin checking
  useEffect(() => {
    const url = `https://ancient-reaches-67409.herokuapp.com/users/${user.email}`;
    axios
      .get(url)

      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const createAccountWithGoogle = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Signin with email pass
  const handleUserRegister = (email, password, displayName) => {
    return createUserWithEmailAndPassword(auth, email, password, displayName);
  };

  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateName = (name) => {
    // console.log(name, "update name function");
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        const newUser = { ...user, displayName: name }; // recommend
        setUser(newUser);
        // console.log(newUser.displayName, "newuser");
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const logOut = () => {
    // console.log("logouttttt");
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    user,
    setUser,
    admin,
    signInWithGoogle,
    createAccountWithGoogle,
    loginWithEmailAndPassword,
    isLoading,
    setIsLoading,
    logOut,
    updateName,
    handleUserRegister,
  };
};

export default useFirebase;
