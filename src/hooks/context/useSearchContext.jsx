import React, { useContext } from 'react'
import { SearchContext } from '../../contexts'

export const useSearchContext = () => {
    const context = useContext(SearchContext)
    if(!context){
        throw new Error('user auth context not found')
    }
  return context
}

