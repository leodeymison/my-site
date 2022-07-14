import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string,
        colors: {
            text: string,
            primary: string,
            secund: string,
            border: string,
            boxshadow: string,
            terc: string
        },
        fonts: {
            p: number,
            span: number,
            h1: number,
            h2: number,
            h3: number
        }
    }
}