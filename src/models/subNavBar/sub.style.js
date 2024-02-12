import styled from "@emotion/styled/macro";
export const Title = styled.div`
font-size:${p=>p.st.fontSizeTitle};
margin-right:${p=>p.st.marginBig};
cursor:pointer;
top:0;
transition: 0.5s;
background:white;
`
export const Menu = styled.div`
width:0;
height:0;
background:white;
transition:0.3s;
background:white;
border-radius:15px;
`
export const MainContainer= styled.div`
min-height:30px;
min-width:50px;
display:flex;
margin-right:10%;
flex-direction:column;
&:hover{
    ${Title}{
        transform: translateY(-150px);

    }
    ${Menu}{
        height:150px;
        width:150px;
        
    }
}

`