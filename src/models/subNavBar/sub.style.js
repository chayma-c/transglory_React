import styled from "@emotion/styled/macro";
export const Title = styled.div`
font-size:${p=>p.st.fontSizeTitle};
cursor:pointer;
top:0;
transition: 0.5s;
`
export const Menu = styled.div`
width:0;
height:0;
background:white;
transition:1s;
border-radius:15px;
opacity : 0 ;
color : black ; 
display : flex ; 
flex-direction : column ; 
gap : 10px  ; 
`
export const MainContainer= styled.div`
min-height:30px;
min-width:50px;
display:flex;
flex-direction:column;
&:hover{
    ${Title}{
        transform: translateY(-5px);

    }
    ${Menu}{
        height:150px;
        width:150px;
        transform: translateY(40px);
        opacity : 1 ; 
    }
}

`