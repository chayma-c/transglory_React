import React , {useEffect , useState} from 'react'
import * as s from './home.style.js'
import Header from './navBar/navBar.js'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const HomePage=()=>{
    const [isLoading , setisLoading] = useState(false)

    useEffect(()=>{


        setisLoading(true) ; 
        setTimeout(() => {
          setisLoading(false) ;
        
        
        }, 4000);
        },[])
        const override = css`

  margin-top: 30vh;
  border-color: white;
`;
    return (
        isLoading 
        ? 
    <s.Loader >
    
    <ClipLoader  color="#ffffff" loading={isLoading}  css={override}  size={350} />
    </s.Loader>
     
    
    
        : 
    <s.main_container color="#f5f5f5">
        <Header/>
    </s.main_container>
    )

}

export default HomePage