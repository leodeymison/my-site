import styled from 'styled-components';

export const _Boxed = styled('div')`
    padding: 1em;
    box-shadow: 5px 5px 15px ${props => props.theme.colors.boxshadow};
    border: solid 1px ${props => props.theme.colors.border};
    margin-bottom: 2em;
    border-radius: 5px;
`


export const _Level = styled('li')`
    display: flex;
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

export const _LevelElement = styled('span')<LevelElementType>`
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
`


export const _BoxCard = styled('div')`
    display: flex;
    flex-direction: column;    
    width: 100%;
    margin-top: 15px;
`

export const _Card = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    border: solid 1px ${props => props.theme.colors.terc};
    padding: .8em 1em;
    margin: .3em 0;
`

export const _Contact = styled('div')`
    display: flex;
    margin-top: 15px;
`

export const _Sociais = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 10px;
    a {
        display: flex;
        align-items: center;
        padding: .5em;
        margin-bottom: 10px;
        border: solid 1px blueviolet;
        border-radius: 5px;
        transition: 0.3s;
        &:hover {
            transition: 0.3s;
            background-color: blueviolet;
        }
        svg {
            margin-right: 5px;
        }
    }
`

export const _Form = styled('form')`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 10px;
`

export const _Icon = styled('div')`
    display: flex;
    
    img {
        height: 25px;
        height: 25px;
        margin: 0 5px;
    }
`