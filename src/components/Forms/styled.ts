import styled from "styled-components";

type InputStyledType = {
    hoverOption: boolean
}

export const InputStyled = styled('input')<InputStyledType>`
    padding: .5em;
    margin-bottom: 10px;
    border: solid 1px ${props => props.theme.colors.terc};
    border-radius: 5px;
    transition: 0.3s;
    background-color: #0000;
    padding: .7em;
    ${
        props => props.hoverOption === true && (
            `&:hover{
                background-color: ${props.theme.colors.terc};
            }`
        )
    }
    &[type = 'submit']{
        cursor: pointer;
    }
`

export const ButtonStyled = styled('button')`
    margin-bottom: 10px;
    border: solid 1px ${props => props.theme.colors.terc};
    border-radius: 5px;
    transition: 0.3s;
    background-color: #0000;
    margin: 0 5px;
    a {
        padding: .7em;
    }
    &[type = 'submit']{
        cursor: pointer;
    }
    &:hover {
        background-color:  ${props => props.theme.colors.terc};
    }
`

export const TextareaStyled = styled('textarea')`
    padding: .5em;
    margin-bottom: 10px;
    border: solid 1px ${props => props.theme.colors.terc};
    border-radius: 5px;
    transition: 0.3s;
    background-color: #0000;
    padding: .7em;
    height: 120px;
`