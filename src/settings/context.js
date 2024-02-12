import React, {createContext, useState} from 'react'
import * as s from './style.js'
const Transfer = createContext();
const ContextProvider = ({children}) =>{
    /*******************************useStateDeclaration***************************************/
    const screen =(width)=>{
        if (width<700) return 'small';
        else if (700 < width && width< 1100) return 'medium';
        else return 'large';
    }
    const [large, setLarge] = useState(screen(window.innerWidth)=== 'large')
    const [medium, setMedium] = useState(screen(window.innerWidth)=== 'medium')
    const [small, setSmall] = useState(screen(window.innerWidth)=== 'small')
    
    const [style, setStyle] = useState(large?s.large : medium? s.medium : s.small)

    window.addEventListener('resize', reportSize)
    function reportSize(){
        setLarge(screen(window.innerWidth)=== 'large')
        setMedium(screen(window.innerWidth)=== 'medium')
        setSmall(screen(window.innerWidth)=== 'small')
        setStyle(large?s.large : medium? s.medium : s.small )
    }

    return (
        <Transfer.Provider value={{large, medium, small, style}}>
            {children}
        </Transfer.Provider>
    )
}
export {Transfer, ContextProvider}