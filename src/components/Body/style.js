import styled from 'styled-components'

export const Container = styled.div`
width: ${(props) => props.width};
height:${(props) => props.height};
display: ${(props) => props.display};

@media all and (max-width:768px){
.imgForm{
display: none;
}
}
img{
width: 50vw;
height: 100vh;  
}

`
export const Section = styled.section`
width: 50vw;
height: 100vh;
background-color: black;
`
export const NavBar = styled.div`
width: 100%;
height: 7%;
display: flex;
margin: 3%;
background-color: transparent;
img{
width:115px ;
height: 28px;
@media all and (max-width: 600px){
width:120px ;
height: 48px;
}
}

`