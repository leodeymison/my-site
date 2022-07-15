import { Link } from 'react-router-dom';
import React from 'react';

// Styled-components
import { 
    HeaderStyled, 
    BoxPeopleStyled, 
    MenuStyled, 
    ConfigStyled, 
    LanguageStyled, 
    ColorStyled 
} from './styled';
import { MenuIconStyled } from '../../styled';

// Images
import author from '../../assets/author.jpg'

// interfaces
import { NavbarType } from '../../interfaces/Navbar';

// icons
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs'
import { AiOutlineMenuFold } from 'react-icons/ai'

const Navbar:React.FC<NavbarType> = ({langParams, setLang, theme, toggleTheme, lang, menu, OpenClosedMenu}) => {
    return (
        <HeaderStyled menu={menu}>
            <ConfigStyled>
                <LanguageStyled onChange={e => setLang(e.target.value)} value={lang}>
                    <option value="pt-br">
                        Pt-Br
                    </option>
                    <option value="en">
                        En
                    </option>
                </LanguageStyled>
                <ColorStyled>
                    <span onClick={toggleTheme}>
                        {
                            theme === 'dark' ? <MdDarkMode /> : <BsFillSunFill />
                        }
                    </span>
                    
                </ColorStyled>
                <MenuIconStyled onClick={OpenClosedMenu}>
                    <AiOutlineMenuFold />
                </MenuIconStyled>
            </ConfigStyled>
            <BoxPeopleStyled>
                <img 
                    src={author} 
                    alt="Foto do leodeymison alcantara" />
                <br />
                <h1>Leodeymison A.</h1>
                <p>{langParams.job}</p>
            </BoxPeopleStyled>
            <MenuStyled>
                <ul>
                    {
                        langParams.menu.map((l, index) => (
                            <li key={index}>
                                <Link onClick={OpenClosedMenu} to={ l.url }>{ l.name }</Link>
                            </li>
                        ))
                    }
                </ul>
            </MenuStyled>
        </HeaderStyled>
    )
}

export default Navbar