import { Container, NavBar, Section } from "./style"
import img1 from '../../img/img1.jpg'
import logo from '../../img/logo.svg'
export const Body = () =>{
    return(
        <Container width={'100vw'} height={'100vh'} display={'flex'}>
            <Section>
                <NavBar>
                    <img src={logo}/>
                </NavBar>
            </Section>
            <img className="imgForm" src={img1}/>
       </Container>
    )
}