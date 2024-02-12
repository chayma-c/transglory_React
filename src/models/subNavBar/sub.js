import React, {useContext, useState} from 'react'
import * as s from './sub.style.js'
import { Transfer } from '../../settings/context.js'
const MainSub= ()=>{
    const {style} = useContext(Transfer)
    return (
        <s.MainContainer>
            <s.Title st= {style}>
                SERVICES
                
            </s.Title>
            <s.Menu>
                
            </s.Menu>
        </s.MainContainer>
    )
}
export default MainSub;