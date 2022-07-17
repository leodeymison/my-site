import { useState } from "react"

// Components
import ButtonRouter from "../../components/Forms/ButtonRouter";
import { FlexBoxGlobalStyled } from "../../styled";
import { LoginStyled } from "./styled";

// Icons
import { ImExit } from 'react-icons/im'
import { FiSettings } from 'react-icons/fi'

const NavbarLogin = () => {
    const [login, setLogin] = useState<boolean>(false)
    const [options, setOptions] = useState<boolean>(false)

    function openClosedOptions(){
        setOptions(!options)
    }

    return (
        <div>
            {
                login ? (
                    <LoginStyled>
                        <img 
                            onClick={openClosedOptions}
                            src="https://www.discoverwalks.com/blog/wp-content/uploads/2020/07/1080px-tu_youyou_5012-1-2015-1024x1024.jpg" 
                            alt="Imagem de perfil de leodeymison" />
                        {
                            options && (
                                <ul>
                                    <li>
                                        <FiSettings />
                                        Configuração
                                    </li>
                                    <li>
                                        <ImExit />
                                        Sair
                                    </li>
                                </ul>
                            )
                        }
                    </LoginStyled>
                ) : (
                    <FlexBoxGlobalStyled>
                        <ButtonRouter url="/login" text="Entrar" />
                        <ButtonRouter url="/register" text="Resistrar-se" active={true} />
                    </FlexBoxGlobalStyled>
                )
            }
        </div>
    )
}

export default NavbarLogin