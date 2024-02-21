import React from 'react'

const useLocalStorage = (key,initialValue) => {
  const  [localStorage,setLocalStorage] = useState(() => {
    const value = localStorage.getItem(key)
    if(value){
        return JSON.parse(value)
    }else{
        return null
    }
  })

  const setLocalStorageValue = (value) => {
    localStorage.setItem(key , value)
  }
  return {
    localStorage,
    setLocalStorageValue
  }
}

export default useLocalStorage