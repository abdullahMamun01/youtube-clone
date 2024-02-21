import React, { useContext } from 'react'
import { AuthContext } from '../../contexts'

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('user auth context not found')
    }
  return context
}

