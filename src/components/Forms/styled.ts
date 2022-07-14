import styled from "styled-components";

export const _Input = styled('input')`
    padding: .5em;
    margin-bottom: 10px;
    border: solid 1px ${props => props.theme.colors.terc};
    border-radius: 5px;
    transition: 0.3s;
    background-color: #0000;
    padding: .7em;
    &[type = 'submit']{
        cursor: pointer;
    }
`

export const _Button = styled('button')`
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

export const _Textarea = styled('textarea')`
    padding: .5em;
    margin-bottom: 10px;
    border: solid 1px ${props => props.theme.colors.terc};
    border-radius: 5px;
    transition: 0.3s;
    background-color: #0000;
    padding: .7em;
    height: 120px;
`