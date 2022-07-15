import styled from 'styled-components';

export const BoxedStyled = styled('div')`
    padding: 1em;
    box-shadow: 5px 5px 15px ${props => props.theme.colors.boxshadow};
    border: solid 1px ${props => props.theme.colors.border};
    margin-bottom: 2em;
    border-radius: 5px;
`


export const LevelStyled = styled('li')`
    display: flex;
    justify-content: space-between;
    border: solid 1px ${props => props.theme.colors.border};
    align-items: center;
    padding: 0.3em;
    border-left: solid 5px ${props => props.theme.colors.border};
    margin-bottom: 10px;
    border-radius: 5px;
    p {
        padding: .3em 1em ;
    }
`
type LevelElementType = {
    bcolor: boolean
}

export const LevelElementStyled = styled('span')<LevelElementType>`
    width: 18px;
    height: 18px;
    margin: 0 3px;
    border-radius: 5px;
    ${props => props.bcolor ? `
        background-color: blueviolet;
        border: solid 1px blueviolet;
        color: black
    `: `
        background-color: #0000;
        border: solid 1px blueviolet;
        color: blueviolet
    `};
    display: block;
    @media (max-width: 600px){
        display: none;
    }
`


export const BoxCardStyled = styled('div')`
    display: flex;
    flex-direction: column;    
    width: 100%;
    margin-top: 15px;
`

export const CardStyled = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    border: solid 1px ${props => props.theme.colors.terc};
    padding: .8em 1em;
    margin: .3em 0;
    h3 {
        width: 100%;
    }
    @media (max-width: 450px){
        display: block;
    }
`

export const ContactStyled = styled('div')`
    display: flex;
    margin-top: 15px;
    @media (max-width: 700px){
        display: block;
    }
`

export const SociaisStyled = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 10px;
    a {
        display: flex;
        align-items: center;
        padding: .5em;
        margin-bottom: 10px;
        border: solid 1px ${props => props.theme.colors.terc};
        border-radius: 5px;
        transition: 0.3s;
        &:hover {
            transition: 0.3s;
            background-color: ${props => props.theme.colors.terc};
        }
        svg {
            margin-right: 5px;
        }
    }
`

export const FormStyled = styled('form')`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 10px;
    @media (max-width: 700px){
        margin-left: 0px;
        margin-top: 2em;
    }
`

export const IconStyled = styled('div')`
    display: flex;
    width: 100%;
    
    img {
        height: 25px;
        height: 25px;
        margin: 0 5px;
    }

    @media (max-width: 600px){
        display: none;
    }
`

export const BoxButtonStyled = styled('div')`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    @media (max-width: 450px){
        justify-content: flex-start;
        padding-top: 15px;
    }
`

export const ListStyled = styled('div')`
    display: flex;
    align-items: center;
`