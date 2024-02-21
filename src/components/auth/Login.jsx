import React from "react";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { useAuthContext } from "../../hooks/context/useAuthcontext";

const Login = () => {
  const { userSignIn } = useFirebaseAuth();
  const {user} = useAuthContext()
  return (
    <button onClick={async () => await userSignIn()} className="">
        Sign In
    </button>
  );
};

export default Login;
