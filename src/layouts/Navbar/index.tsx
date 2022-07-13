import { Link } from 'react-router-dom';
 
// Styled-components
import { _Header, _BoxPeople, _Menu, _config, _FontPlus, _Language, _Color } from './styled';

// Images
import author from '../../assets/author.jpg'

// interfaces
import { NavbarType } from '../../interfaces/Navbar';
import langs from '../../langs';

// icons
import { AiOutlinePlus } from 'react-icons/ai';
import { CgMathMinus } from 'react-icons/cg';
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs'
import { useState } from 'react';

const Navbar = (data:NavbarType) => {
    const [typeColor, setTypeColor] = useState(true)
    const { lang, setLang } = data

    function chargeLanguage(e:{target: {value: string}}){
        const option:string = e.target.value
        if(option === 'pt-br' || option === 'en'){
            setLang(langs[option])
        }
        else {
            setLang(langs['pt-br'])
        }
    }

    function chargeColor(){
        setTypeColor(!typeColor)
    }

    function fontPlus(){
        console.log('mais')
    }
    function fontLess(){
        console.log('menos')
    }

    return (
        <_Header>
            <_config>
                <_Language onChange={chargeLanguage}>
                    <option value="pt-br">
                        Pt-Br
                    </option>
                    <option value="en">
                        En
                    </option>
                </_Language>
                <_FontPlus>
                    <span onClick={fontLess}>
                        <CgMathMinus />
                    </span>
                    <p>
                        Aa
                    </p>
                    <span onClick={fontPlus}>
                        <AiOutlinePlus />
                    </span>
                </_FontPlus>
                <_Color>
                    <span onClick={chargeColor}>
                        {
                            typeColor ? <MdDarkMode /> : <BsFillSunFill />
                        }
                    </span>
                </_Color>
            </_config>
            <_BoxPeople>
                <img 
                    src={author} 
                    alt="Foto do leodeymison alcantara" />
                <br />
                <h1>Leodeymison A.</h1>
                <p>{data.lang.job}</p>
            </_BoxPeople>
            <_Menu>
                <ul>
                    {
                        lang.menu.map((l, index) => (
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