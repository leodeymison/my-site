import styled from "styled-components";

export const TitleStyled = styled('div')`
    width: 100%;
    padding: 3em 0;
    text-align: center;
`

export const CategorysStyled = styled('div')`
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px ${props => props.theme.colors.border};
    align-items: flex-end;
    position: relative;
    ul {
        display: flex;
        flex-direction: column;
        width: 250px;
        height: 400px;
        position: absolute;
        top: 0;
        left: 50px;
        background-color: ${props => props.theme.colors.terc};
        overflow-x: hidden;
        overflow-y: auto;
        &::-webkit-scrollbar {
            width: 8px;
        }
        &::-webkit-scrollbar-thumb {
            width: 8px;
            background-color: ${props => props.theme.colors.terc};
        }
    }
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

type CategorysLiType = {
    active?: boolean,
    hoverTop?: boolean
}

export const CategorysLiStyled = styled('li')<CategorysLiType>`
    padding: .8em 1em;
    cursor: pointer;
    ${
        props => props.active && `
            background-color: ${props.theme.colors.border};
    `
    }
    &:hover {
        background-color: ${props => props.theme.colors.border};
        transition: 0.2s;
    }
`
export const IconMenuStyled = styled('div')`
    width: 100%;
    svg {
        padding: .8em 1em;
        cursor: pointer;
        &:hover {
            background-color: ${props => props.theme.colors.border};
            transition: 0.2s;
        }
    }
`

export const ProductsStyled = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    a {
        display: flex;
        flex-direction: column;
        width: ${(100 / 3) - 3}%;
        margin: 10px 0;
        padding: 1%;
        border-radius: 5px;
        box-shadow: 5px 5px 10px ${props => props.theme.colors.boxshadow};
        border: solid 1px ${props => props.theme.colors.border};
        img {
            width: 100%;
            border-radius: 5px;
        }
    }
`
