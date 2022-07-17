import styled from "styled-components";

export const LoginStyled = styled("div")`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const BoxLoginStyled = styled("div")`
    background-color: ${props => props.theme.colors.boxshadow};
    padding: 1em;
    border-radius: 10px;
    text-align: center;
    h1 {
        padding: .5em 0;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 350px;
        div {
            display: flex;
            padding-bottom: 10px;
            input {
                margin-right: 10px;
                cursor: pointer;
            }
            span {
                cursor: pointer;
            }
        }
    }
`