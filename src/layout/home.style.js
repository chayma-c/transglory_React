import styled from "@emotion/styled";
export const main_container= styled.div`
text-align:center;
color:${p=>p.color};
min-height : 100vh ; 
background-image: linear-gradient(315deg, #be1622 0%, #2234 100%);
`
export const Loader = styled.div`
height  : 100vh ; 
background-color: #be1622;
background-image: linear-gradient(315deg, #be1622 0%, #2234 74%);
display  : flex ; 
justify-content : center ; 
align-items : center ; 
`