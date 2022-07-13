import styled from "styled-components";

export const _Input = styled('input')`
    padding: .5em;
    margin-bottom: 10px;
    border: solid 1px blueviolet;
    border-radius: 5px;
    transition: 0.3s;
    background-color: #0000;
    padding: .7em;
    &[type = 'submit']{
        cursor: pointer;
    }
`

export const _Textarea = styled('textarea')`
    padding: .5em;
    margin-bottom: 10px;
    border: solid 1px blueviolet;
    border-radius: 5px;
    transition: 0.3s;
    background-color: #0000;
    padding: .7em;
    height: 120px;
`