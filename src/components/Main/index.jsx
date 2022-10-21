import { ConatainerForms, Flex, Information } from "./style"
import EmailIcon from '@mui/icons-material/Email';
import LoginIcon from '@mui/icons-material/Login';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const Main = () =>{
    return(
        
        <ConatainerForms>
            <Flex  color={'#AFB6C2'} textAling={'center'}>
                <h1> <LoginIcon/> Faça seu Login</h1>
                <p>Entre com suas informações de cadastro.</p>
            </Flex>
            <form>
                <Flex>
                    <label> E-mail 
                        <Information  width={'100%'} height={'60%'} placeholder="Digite seu e-mail" border={'solid 2px #FFC632'} type='email'/>
                          <span className="email"><EmailIcon/></span>
                     </label>
                </Flex>

                <Flex>
                     <label> Senha 
                        <Information  width={'100%'} height={'60%'} placeholder="Digite sua senha" border={'solid 2px #FFC632'} type='password'/>
                            <span className="password"><LockIcon/></span>
                            <span className="visible"><VisibilityIcon/></span>
                     </label>
                </Flex>

                <Flex display={'flex'} alingItems={'center'}>
                    <Flex gap={'0.3rem'} display={'flex'} textAling={'center'} justifyContent={'start'}>
                        <Information   width={'10%'} height={'25%'} type='checkbox'/> <label>Lembre-me</label>
                    </Flex>

                    <Flex justifyContent={'end'} display={'flex'} >
                        <a href="http://google.com.br">Esqueci minha senha</a>
                    </Flex>                       
               </Flex>
               <Flex>
                <button type="submit">Entrar</button>
               </Flex>
               
               <Flex color={'#FFC632'} justifyContent={'center'} display={'flex'}>
                <p >Não tem uma conta? <a  href="http://google.com.br">Registre-se</a></p>
               </Flex>
            </form>
        </ConatainerForms>
    )
}