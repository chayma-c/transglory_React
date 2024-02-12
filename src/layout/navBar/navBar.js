import React, {useState,useContext, useEffect} from 'react'
import * as s from './navBar.style.js'
import * as t from './navBar.text.js'
import { Transfer } from '../../settings/context.js'
import MainSub from '../../models/subNavBar/sub.js'
const Header=()=>{
    const [endAnimation, setEndAnimation] = useState(true)
    const [endAnimationS, setEndAnimationS] = useState(true)
    const {style,large, small} = useContext(Transfer)    /*ya3ni najem nesta3malha fi ay file*/
    useEffect(()=>{
        if (!large){
            setTimeout(() => {
                setEndAnimation(false)
            }, 1400);
        }
        else{
            setEndAnimation(true)
        }
        if (small){
            setTimeout(() => {
                setEndAnimationS(false)
            }, 1400); 
        }
        else{
            setEndAnimationS(true)
        }

    },[large, small]
    )
    const menu = t.data_fr.menu.map((item)=>{
        const localState = item.submenu_state;
        return (
            <div>
            {
                localState ? <MainSub title={item.title} sub = {item.submenu} />  : <s.item st={style}> {item.title}</s.item> 
            }

            </div>
        )
    })
    return (
        <s.main_container>
            
                <s.logo st={style} large= {endAnimation} largesec = {large} src="http://transglory.tn/bundles/website/images/logos/logo-tn.png"/>
            <s.menu st={style} large = {endAnimation}>
                    
                 {menu}
            </s.menu>
            <s.search small= {endAnimationS} smallsec = {small}>
            <svg width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#f5f5f5" d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3M97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8"></path></svg>
            </s.search>
        </s.main_container>
    )
}
export default Header