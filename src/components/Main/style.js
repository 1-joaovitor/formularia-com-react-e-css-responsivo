import styled from 'styled-components'

export const ConatainerForms = styled.div`
width: 572px;
height: 512px;
background-color: #24221F;
position: absolute;
left: 150px;
top: 194px;
border-radius: 4px;
direction: column;
justify-content: center;
align-items: center;
padding:0 7rem;

@media all and (max-width: 1600px){
    width: 472px;
    height: 412px;
  
}
@media all and (max-width: 1400px){
    width: 420px;
    height: 380px;
  
}
@media all and (max-width: 1200px){
    width: 380px;
    height: 350px;
    left: 100px;
    justify-content: center;
    align-items: center;
    padding: 0 5rem;
     
}
@media all and (max-width: 1024px){
    width: 300px;
    height: 300px;
    left: 90px;
    justify-content: center;
    align-items: center;
    padding: 0 2.5rem;
     
}
@media all and (max-width: 768px){
    left: 170px; 
}

@media all and (max-width: 600px){
    left:30px;
    width: 320px;
    height: 704px;
    top: 60px;
    background-color: transparent;
}
`
export const Flex = styled.div`
width: 334px;
height: 64px;
text-align:${(props) => props.textAling};
color:${(props) => props.color};
margin-top:1rem ;
align-items: ${(props) => props.alingitems};
display: ${(props) => props.display};
justify-content: ${(props) => props.justifyContent};
position: ${(props) => props.position};
gap:${(props) => props.gap};

@media all and (max-width:1600px){
    width: 270px;
    height: 64px;
    margin-top: 0.7rem;
}

@media all and (max-width:1400px){
    width: 250px;
    height: 54px;
    margin-top: 0.7rem;
    font-size: 0.7rem;   
}

@media all and (max-width:1200px){
    width: 230px;
    height: 50px;
    margin-top: 0.5rem;
    font-size: 0.6rem;    
}

@media all and (max-width:1024px){
    margin-top:0.3rem ;
}

@media all and (max-width:600px){
    margin-top:1rem ;
    width: 250px;
    height: 50px;
    font-size: 0.7rem;
}

h1{
color: #D4CCB6;
@media all and (max-width:1400px){
font-size: 1.5rem;
}   
}

label{
color: #AFB6C2;
font-size: 16px;
@media all and (max-width:1400px){
font-size: 0.8rem;    
}

@media all and (max-width:1200px){
    font-size: 0.7rem;   
}
    
}
.email{
position: absolute;
left:7.8rem;
margin-top: 6px;
color: #FFC632;
@media all and (max-width:1200px){
left:5.5rem;
margin-top: 0.2rem; 
}

@media all and (max-width: 1024px){
left:3rem;
margin-top: 0.2rem;   
}
} 

.password{
position: absolute;
left:7.8rem;
margin-top: 6px;
color: #AFB6C2;

@media all and (max-width:1200px){
left:5.5rem;
margin-top: 0.2rem; 
}

@media all and (max-width: 1024px){
left:3rem;
margin-top: 0.2rem;   
}
}

.visible{
position: absolute;
right: 8.5rem;
margin-top: 0.4rem;
color: #AFB6C2;
@media all and (max-width:1600px){
right: 6.5rem;
}

@media all and (max-width:1400px){
right:4.5rem;
margin-top: 0.2rem;
    
}
@media all and (max-width:1200px){
right:5rem;
margin-top: 0.2rem;
    
}
@media all and (max-width: 1024px){
right:2.5rem;
margin-top: 0.2rem; 
      
}
@media all and (max-width: 600px){
right:2.6rem;
}
}

a{
color:#FFC632;
text-decoration: none;
font-size: 14px;
@media all and (max-width:1400px){
font-size: 0.8rem;
    
}
@media all and (max-width:1200px){
    font-size: 0.7rem;
    
}
}

button{
width: 100%;
height: 70%;
font-size: 2rem;
justify-content: center;
align-items: center;
background-color: #FFC632;
padding:12px, 24px, 12px, 24px;
border-radius: 4px;
cursor: pointer;

:hover{
background-color: transparent;
border: solid 2px #FFC632;
color: white;
}

@media all and (max-width:1400px){
font-size: 1.5rem;
    
}
}
`
export const Information = styled.input`
width:${(props) => props.width};
height:${(props) => props.height};
border-radius: 5px;
border: ${(props) => props.border};
background-color: transparent;
color: white;
padding: 0 3rem;
@media all and (max-width:1400px){
    font-size: 0.8rem;
    
}
@media all and (max-width:1200px){
    font-size: 0.7rem;
    
}



`
