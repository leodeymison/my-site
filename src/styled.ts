import styled, { createGlobalStyle } from 'styled-components';

export const _Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: ${props => props.theme.colors.text};
    };
    select {
        color: ${props => props.theme.colors.text};
        background-color: #ddd0;
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
        font-size: ${props => props.theme.fonts.p}px;
    }
    h1 {
        font-size: ${props => props.theme.fonts.h1}px;
    }
    h2 {
        font-size: ${props => props.theme.fonts.h2}px;
    }
`
type ContainerProps = {
    dplay?: 'flex' | 'block',
    pd?: number,
    justifyC?: 'center' | 'flex-end' | 'flex-start' | 'space-between'
}

export const _Container = styled.div<ContainerProps>`
    display: ${props => props.dplay || "block"};
    padding: ${props => props.pd+'em' || '0em' };
    justify-content: ${props => props.justifyC || 'flex-start'};
`;


export const _Section = styled('section')`
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
        background-color: blueviolet;
    }
`