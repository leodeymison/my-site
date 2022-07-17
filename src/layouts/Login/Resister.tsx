import { useState } from 'react';

// Styleds 
import { LoginStyled } from './styled';
import { BoxLoginStyled, } from './styled';

// Components
import Input from '../../components/Forms/Input';
import ButtonFunc from '../../components/Forms/ButtonFunc';

// icons
import { FcGoogle } from 'react-icons/fc'

const Register = () => {
    const [password, setPassword] = useState(false)

    function viewPassword(){
        setPassword(!password)
    }

    return (
        <LoginStyled>
            <BoxLoginStyled>
                <h1>Login</h1>
                <br /><br />
                <form action="">
                    <Input name="name" type='text' placeholder='Nome' />
                    <Input name="login" type='email' placeholder='login' />
                    <Input name="password" type={
                        password ? 'text' : 'password'
                    } placeholder='Senha' />
                    <Input name="password" type={
                        password ? 'text' : 'password'
                    } placeholder='Senha novamente' />
                    <div>
                        {
                            password ? 
                            <input onClick={viewPassword} type="checkbox" checked /> : 
                            <input onClick={viewPassword} type="checkbox"  />
                        }
                        <span onClick={viewPassword}>Mostrar senha</span>
                    </div>
                    <Input type='submit' value="Entrar" active={true}  />
                    <ButtonFunc 
                        padding='.7em'
                        margin='0 0 10px 0'
                        hoverBC="white"
                        hoverC="black"
                        text={<><FcGoogle /> <p>Entrar com o google</p></>} />
                </form>
            </BoxLoginStyled>
        </LoginStyled>
    )
}

export default Register