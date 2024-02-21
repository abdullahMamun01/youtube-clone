import React, { useState } from 'react'
import { AuthContext } from '../contexts'

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
  return (
    <AuthContext.Provider value={{user,setUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider