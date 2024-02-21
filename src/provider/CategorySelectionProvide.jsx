import React, { useState } from 'react'
import { SelectedCategoryContext } from '../contexts'

const CategorySelectionProvide = ({children}) => {
    const [selectCategory,setSelectCategory] = useState("")
  return (
    <SelectedCategoryContext.Provider value={{selectCategory,setSelectCategory}}>
        {children}
    </SelectedCategoryContext.Provider>
  )
}

export default CategorySelectionProvide