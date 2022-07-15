import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: ${props => props.theme.colors.text};
    };
    select {
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.primary};
    }
    input:focus, select:focus, button:focus, textarea:focus {
        outline: none;
    };
    a {
        display: block;
        text-decoration: none;
    }
    body {
        overflow: hidden;
    }
    li {
        list-style-type: none;
    }
    p, a {
        font-size: 16px;
    }
    h1 {
        font-size: 32px;
    }
    h2 {
        font-size: 24px;
    }
`
type ContainerProps = {
    dplay?: 'flex' | 'block',
    pd?: number,
    justifyC?: 'center' | 'flex-end' | 'flex-start' | 'space-between'
}

export const ContainerStyled = styled.div<ContainerProps>`
    display: ${props => props.dplay || "block"};
    padding: ${props => props.pd+'em' || '0em' };
    justify-content: ${props => props.justifyC || 'flex-start'};
`;


export const SectionStyled = styled('section')`
    display: flex;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: ${props => props.theme.colors.secund};
    padding: 0 2em;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        width: 8px;
        background-color: ${props => props.theme.colors.terc};
    }
    @media (max-width: 700px){
        padding: 0 1em;
    }
    @media (max-width: 500px){
        padding: 0 .5em;
    }
`

export const MinHeightStyled = styled('div')`
    min-height: 87%;
`

export const MenuIconStyled = styled('div')`
    justify-content: flex-end;
    font-size: 24px;
    display: none;
    margin: 0 10px;
    cursor: pointer;
    @media (max-width: 1200px){
        display: flex;
    }
`