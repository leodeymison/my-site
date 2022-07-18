import styled from "styled-components";

export const BoxStyled = styled('div')`
    display: flex;
    flex-direction: column;
    h1 {
        padding: 2em 0;
        text-align: center;
    }
`

export const ListStyled = styled('ul')`
    display: flex;
    flex-direction: column;
    li {
        background-color: ${props => props.theme.colors.boxshadow};
        margin-bottom: 10px;
        border-left: solid 5px ${props => props.theme.colors.terc};
        border-radius: 5px;
        transition: 0.3s;
        &:hover {
            background-color: ${props => props.theme.colors.border};
            transition: 0.3s;
        }
        a {
            padding: 1em;
        }
    }
`
export const NavegationStyled = styled('div')`
    display: flex;
    justify-content: space-between;
    a {
        padding: 1em;
        cursor: pointer;
        &:hover {
            background-color: ${props => props.theme.colors.border};
        }
    }
`
type TableType = {
    height?: string
}
export const TableStyled = styled('table')<TableType>`
    display: block;
    text-align: left;
    overflow-x: auto;
    white-space: nowrap;
    height: ${props => props.height || 'auto'};
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    &::-webkit-scrollbar-thumb {
        width: 8px;
        height: 8px;
        background-color: ${props => props.theme.colors.terc};
        border-radius: 10px;
    }
    thead {
        tr {
            th {
                padding: .5em;
                background-color: ${props => props.theme.colors.border};
                text-transform: uppercase;
                select {
                    margin-left: 10px;
                    width: 100px;
                    padding: 0.3em;
                }
            }
        }
    }
    tbody {
        tr {
            td {
                padding: .5em;
                border: solid 1px ${props => props.theme.colors.border};
                button {
                    float: left;
                }
                img {
                    height: 150px;
                }
                svg {
                    margin-right: 10px;
                }
            }
        }
    }
`