import styled from 'styled-components';


type HeaderType = {
    menu: boolean,
}

export const HeaderStyled = styled('header')<HeaderType>`
    width: 30%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: ${props => props.theme.colors.primary};
    transition: 0.3s;
    @media (max-width: 1200px){
        transition: 0.3s;
        display: block;
        transform: translateX(${props => props.menu ? "0%" : "-100%"});
        position: fixed;
        top: 0;
        left: 0;
    }
    @media (max-width: 900px){
        width: 50%;
    }
    @media (max-width: 700px){
        width: 70%;
    }
    @media (max-width: 500px){
        width: 100%;
    }
`

export const BoxPeopleStyled = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3em 0;
    img {
        width: 60%;
        border: solid 5px #2d2d2d;
        border-radius: 100%;
    }
    p {
        margin-top: 10px;
    }
`


export const MenuStyled = styled('nav')`
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        width: 90%;
        li {
            width: 100%;
            margin: 8px 0;
            a {
                text-align: center;
                background-color: #0000;
                border: solid 1px ${props => props.theme.colors.terc};
                padding: .5em 0;
                border-radius: 5px;
                &:hover {
                    background-color: ${props => props.theme.colors.terc};
                }
            }
        }
    }
`

export const ConfigStyled = styled('div')`
    display: flex;
    padding: 1em;
    justify-content: space-between;
`


export const LanguageStyled = styled('select')`
    border: none;
    option {
        background-color: #000;
    }
`

export const FontPlusStyled = styled('div')`
    display: flex;
    align-items: center;
    span {
        cursor: pointer;
        svg {
            font-size: 12px;
        }
    }
    p {
        padding: .2em;
        font-size: 16px;
        font-weight: 600;
    }
`

export const ColorStyled = styled('div')`
    display: flex;
    align-items: center;
    cursor: pointer;
`