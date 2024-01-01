import { useState } from "react"


const useSelection = (states,defaultState) =>{
    
    const [selected, setSelected] = useState(states.reduce((acc, curr) => {
        if(typeof curr === 'object'){
            acc[curr.name] = curr.name === defaultState
        }
        if(typeof curr === 'string'){
            acc[curr] = curr === defaultState
        }
        return acc
    }, {}))
    
    
    const handleOptionClick = (option) => {
        setSelected(
            Object.keys(selected).reduce((acc, curr) => {
           
                acc[curr] = option === curr
    
                return acc
            }, {})
        )
    }


    return {state : selected , handleClick : handleOptionClick}
}



export default useSelection