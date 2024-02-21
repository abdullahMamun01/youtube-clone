import React from "react";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";

const Logout = () => {
  const {userSignOut} = useFirebaseAuth()
  return (
    <button
      onClick={async () => await userSignOut()}
    >
      Sign Out
    </button>
  );
};

export default Logout;
