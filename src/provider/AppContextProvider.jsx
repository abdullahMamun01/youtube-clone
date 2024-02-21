import React from 'react'
import AuthProvider from './AuthProvider'
import CategorySelectionProvide from './CategorySelectionProvide'
import SearchProvider from './SearchProvider'


export const AppContextProvider = ({ children }) => {
  return (

    <AuthProvider>
      <CategorySelectionProvide>
        <SearchProvider>
          {children}
        </SearchProvider>
      </CategorySelectionProvide>
    </AuthProvider>

  )
}
