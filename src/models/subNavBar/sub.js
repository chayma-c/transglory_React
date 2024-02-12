import React, {useContext, useState} from 'react'
import * as s from './sub.style.js'
import { Transfer } from '../../settings/context.js'
const MainSub= (props)=>{
    const {style} = useContext(Transfer)
    const menujsx = props.sub.map((item)=>{
        return(
            <div>
                {item}
            </div>
        )
    })
    console.log(props)
    return (
        <s.MainContainer>
            <s.Title st= {style}>
                {props.title}
                
            </s.Title>
            <s.Menu>
                {menujsx}
            </s.Menu>
        </s.MainContainer>
    )
}
export default MainSub;