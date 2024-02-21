import React, { useContext } from 'react'
import { SelectedCategoryContext } from '../../contexts'

export const useSelectCategoryContext = () => {
    const context = useContext(SelectedCategoryContext)
    if(!context){
        throw new Error('user auth context not found')
    }
  return context
}

