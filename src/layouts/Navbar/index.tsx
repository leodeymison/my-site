import { Link } from 'react-router-dom';
import React from 'react';

// Styled-components
import { 
    _Header, 
    _BoxPeople, 
    _Menu, 
    _config, 
    _FontPlus, 
    _Language, 
    _Color 
} from './styled';
import { _MenuIcon } from '../../styled';

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
        <_Header menu={menu}>
            <_config>
                <_Language onChange={e => setLang(e.target.value)} value={lang}>
                    <option value="pt-br">
                        Pt-Br
                    </option>
                    <option value="en">
                        En
                    </option>
                </_Language>
                <_Color>
                    <span onClick={toggleTheme}>
                        {
                            theme == 'dark' ? <MdDarkMode /> : <BsFillSunFill />
                        }
                    </span>
                    
                </_Color>
                <_MenuIcon onClick={OpenClosedMenu}>
                    <AiOutlineMenuFold />
                </_MenuIcon>
            </_config>
            <_BoxPeople>
                <img 
                    src={author} 
                    alt="Foto do leodeymison alcantara" />
                <br />
                <h1>Leodeymison A.</h1>
                <p>{langParams.job}</p>
            </_BoxPeople>
            <_Menu>
                <ul>
                    {
                        langParams.menu.map((l, index) => (
                            <li key={index}>
                                <Link to={ l.url }>{ l.name }</Link>
                            </li>
                        ))
                    }
                </ul>
            </_Menu>
        </_Header>
    )
}

export default Navbar