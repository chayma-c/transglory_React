import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';
const move = keyframes`
0%{
    transform: translateY(0);
}
70%{
    transform: translateY (-250px);
    display:none;

}
100%{
    transform: translateY(-400px);
    display:none;

}
`
const movex = keyframes`
0%{
    transform: translateX(0);
}
70%{
    transform: translateX (-250px);

}
100%{
    transform: translateX(-400px);

}
`
export const main_container = styled.div`
width:100%; 
min-height:200px;
display:flex;
justify-content:space-between;
align-items:center;
min-width:400px;

`
export const logo = styled.img`
height: ${p=>p.st.logoHeight};
width: ${p=>p.st.logoWidth};
transition:2s;
animation : ${p=>p.largesec ? '': move} 1.5s ;
display: ${p=>p.large?'block':'none'};
padding-left: 30px ; 
`
export const menu = styled.div`
transition:2s;
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&display=swap');
background:transparent;
font-size: ${p=>p.st.fontSizeTitle};
font-family: 'DM Sans', sans-serif;
display:flex;
justify-content:space-between;
align-items : center ; 
gap : 30px ; 
`
export const search = styled.div`
animation : ${p=>p.smallsec ? move: 'none'} 1.5s ;
display: ${p=>p.small?'block':'none'};
padding-right : 30px ; 
`