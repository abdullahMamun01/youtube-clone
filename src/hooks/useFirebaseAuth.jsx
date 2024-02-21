import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";

import auth from "../firebase/firebaseConfig";
import { useAuthContext } from "./context/useAuthcontext";

const useFirebaseAuth = () => {
  // const { setUser,isLoggedIn,setIsLoggedIn } = useAppContext();
  const {setUser} = useAuthContext()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser({
          name: authUser.displayName,
          email: authUser.email,
          profileUrl: authUser.photoURL,
        })
        
      } else{
        setUser(null);
      }
    });

    return () => {
      // Unsubscribe when the user logout
      unsubscribe();
    };
  }, []);

//user sign-in logic
  const userSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const authUser = await signInWithPopup(auth, provider);
      if (authUser) {
      
        setUser({
          name: authUser.user.displayName,
          email: authUser.user.email,
          profileUrl: authUser.user.photoURL,
        });
   
      }

    } catch (e) {
      console.log(e.message);
    }
  };

//user logout logic
  const userSignOut = async () => {
    try {
      await signOut(auth);
      // setUser(null)

    } catch (e) {
      console.log(e.message);
    }
  };

  return {
    userSignIn,
    userSignOut,
  };
};

export default useFirebaseAuth;
