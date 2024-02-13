import styled from "@emotion/styled";
export const main_container= styled.div`
text-align:center;
color:${p=>p.color};
min-height : 100vh ; 
background-image: linear-gradient(315deg, #be1622 0%, #2234 100%);

`
export const Loader = styled.div`
height  : 100vh ; 
background-color: #7f5a83;
background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);

display  : flex ; 
justify-content : center ; 
align-items : center ; 
`