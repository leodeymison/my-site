import styled from 'styled-components';

export const _Header = styled('header')`
    width: 30%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: ${props => props.theme.colors.primary};
`

export const _BoxPeople = styled('div')`
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


export const _Menu = styled('nav')`
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
                border: solid 1px blueviolet;
                padding: .5em 0;
                border-radius: 5px;
                &:hover {
                    background-color: blueviolet;
                }
            }
        }
    }
`

export const _config = styled('div')`
    display: flex;
    padding: 1em;
    justify-content: space-between;
`


export const _Language = styled('select')`
    border: none;

    option {
        background-color: #000;
    }
`

export const _FontPlus = styled('div')`
    display: flex;
    align-items: center;
    span {
        cursor: pointer;
        svg {
            font-size: ${props => props.theme.fonts.span}px;
        }
    }
    p {
        padding: .2em;
        font-size: ${props => props.theme.fonts.p}px;
        font-weight: 600;
    }
`

export const _Color = styled('div')`
    display: flex;
    cursor: pointer;
`