import styled, { createGlobalStyle } from 'styled-components';

export const _Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #ddd;
    };
    select {
        color: #ddd;
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
`
type ContainerProps = {
    dplay?: 'flex' | 'block',
    pd?: number,
    justifyC?: 'center' | 'flex-end' | 'flex-start' | 'space-between'
}

export const theme = {
    colors: {
        white: '#eee',
        black: '#111',
        gray: '#333',
        lightGray: 'CCC'
    },
    bColor: {
        dark: {
            primary: "#000"
        },
        ligth: {
            primary: "#fff"
        }
    },
    sizes: {
        xsmall: '1rem',
        small: '1.2rem',
        medium: '1.6rem',
        large: '2.4rem',
        xlarge: '3.2rem',
        xxlarge: '4.0rem'
    },
}

export type HeadingProps = {
    color?: keyof typeof theme.colors,
    size?: keyof typeof theme.sizes,
    fontWeight?: 100 | 400 | 700,
    level?: 1 | 2 | 3 | 4 | 5 | 6,
    textAlign?: 'center' | 'end' | 'justify' | 'left' | 'right' | 'start' |
    'inherit' | 'inherit' | 'initial' | 'unset'
}

export const _Container = styled.div<ContainerProps>`
    display: ${props => props.dplay || "block"};
    padding: ${props => props.pd+'em' || '0em' };
    justify-content: ${props => props.justifyC || 'flex-start'};
`;

export const _Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`
}))<HeadingProps>`
    font-size: ${props => props.size};
    color: ${props => props.color};
    font-weight: ${props => props.fontWeight};
    text-align: ${props => props.textAlign || 'left'};
    width: 100%;
`;


export const _Section = styled('section')`
    display: flex;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #13081b;
    padding: 0 2em;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        width: 8px;
        background-color: blueviolet;
    }
`