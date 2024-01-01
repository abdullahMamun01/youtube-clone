import React, { createContext, useContext, useState } from 'react'
import useSelection from './useSelection'
import { categories } from '../utils/constants'
const SearchContext = createContext()

 const SearchContextProvider = ({children})=> {
  const {state ,handleClick} = useSelection(categories , 'All')
  const [search,setSearch] = useState('')
  return (
    <SearchContext.Provider value={{search,setSearch,state,handleClick}}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider


export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchContextProvider');
  }
  return context;
};