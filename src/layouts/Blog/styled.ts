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
        p {
            height: 100%;
            padding-top: 10px;
        }
    }
`
export const ArticleCleanPStyled = styled('p')`
    text-align: center;
    width: 100%;
    padding: 10px 0 37% 0;
`
export const InformationsStyled = styled('div')`
    border-top: solid 1px ${props => props.theme.colors.border};
    margin-top: 15px;
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
`

type FlexBoxType = {
    alignItens?: "center" | "flex-end" | "flex-start",
    justifyContent?: "space-between" | "center" | "flex-end" | "flex-start",
    padding?: string
}
export const FlexBoxStyled = styled('div')<FlexBoxType>`
    display: flex;
    align-items: ${props => props.alignItens || "flex-start"};
    justify-content: ${props => props.justifyContent || "flex-start"};
    padding: ${props => props.padding || "0px"};
    svg {
        margin-right: 5px;
    }
    p {
        display: flex;
        align-items: center;
        margin: 0 10px;
        svg {
            margin-right: 5px;
        }
    }
`

export const SpanStyled = styled('span')`
    background-color: ${props => props.theme.colors.boxshadow};
    border: solid 1px ${props => props.theme.colors.border};
    padding: 1px 10px;
    border-radius: 50px;
    font-size: 14px;
`

export const CreateCommentStyled = styled('section')`
    display: flex;
    flex-direction: column;
`

type CommentType = {
    margin?: string
}
export const CommentStyled = styled('ul')<CommentType>`
    display: flex;
    flex-direction: column;
    margin: ${props => props.margin || '0 0 10px 0'};
    li {
        border: solid 1px ${props => props.theme.colors.border};
        border-radius: 5px;
        padding: .5em;
        margin: 10px 0;
        div {
            img {
                height: 60px;
                float: left;
                margin-right: 15px;
            }
            h2 {
                padding: 5px;
            }
        }
    }
`