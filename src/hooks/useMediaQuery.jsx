import React, { useState } from 'react'
import { useEffect } from 'react'

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches)


    useEffect(() => {
        const mediaQueryList = window.matchMedia(query)
        const handleChange = (e) => {
            setMatches(e.matches)
        }
        mediaQueryList.addEventListener("change", handleChange)

        return () => { 
            mediaQueryList.removeEventListener("change", handleChange)
         }
    }, [query])
    return {
        isSmallDevice : matches
    }
}

export default useMediaQuery