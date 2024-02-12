import React from 'react'
import * as s from './home.style.js'
import Header from './navBar/navBar.js'
import mainData from './home.data.js'
const HomePage=()=>{
    const localData = mainData();
    return (
    <s.main_container color="#f5f5f5">
        <Header/>
    </s.main_container>
    )

}

export default HomePage