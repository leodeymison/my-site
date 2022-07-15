import { LangsType } from "./types";
import { css, graphql, html, js, node, react, styled, ts, vue } from './icons.ds';
import Tecs from './tecs'

var ptbr:LangsType = {
    title: "pt-br",
    navbar: {
        job: "Desenvolvedor FullStack",
        menu: [
            {
                name: "Home",
                url: "/"
            },
            {
                name: "Sobre mim",
                url: "/about"
            },
            {
                name: "Projetos",
                url: "/projects"
            },
            {
                name: "Contato",
                url: "/contact"
            }
        ]
    },
    pags: {
        who: {
            title: "Quem sou eu?",
            body: `
                Sou um programador FullStack apaixonado por criar ferramentas que mudam vidas e um 
                viciado em conhecimento. 
                A mente que se abre a uma nova ideia jamais 
                voltará ao seu tamanho original - Albert Einstein
            `

        },
        about: {
            title: "Sobre mim",
            body: "Me chamo Leodeymison, nasci em 16/04/2003, com naturalidade brasileira"
        },
        tec: {
            title: "Tecnologias",
            tecs: Tecs
        },
        projects: {
            title: "Projetos",
            list: [
                {
                    id: 1,
                    title: "Gerenciador de projetos",
                    icons: [react, js, html, css],
                    links: [
                        {
                            name: "Código",
                            url: "https://github.com/leodeymison/costs",
                            target: true
                        },
                    ]
                },
                {
                    id: 2,
                    title: "Dialog App",
                    icons: [graphql, ts, styled, css, react],
                    links: [
                        {
                            name: "Código",
                            url: "https://github.com/leodeymison/dialogApp",
                            target: true
                        },
                    ]
                },
                {
                    id: 3,
                    title: "Pokedex",
                    icons: [vue, js],
                    links: [
                        {
                            name: "Código",
                            url: "https://github.com/leodeymison/pokedex",
                            target: true
                        },
                    ]
                },
                {
                    id: 4,
                    title: "Envio de arquivos",
                    icons: [node, js],
                    links: [
                        {
                            name: "Código",
                            url: "https://github.com/leodeymison/upload-de-arquivos-backend",
                            target: true
                        },
                    ]
                },
                {
                    id: 5,
                    title: "Simulador de e-commerce",
                    icons: [react, ts, styled, html, css],
                    links: [
                        {
                            name: "Código",
                            url: "https://github.com/leodeymison/codeby",
                            target: true
                        },
                        {
                            name: "Página",
                            url: "https://codeby-demo.netlify.app/",
                            target: true
                        }
                    ]
                }
            ]
        },
        contact: {
            title: "Contatos",
            name: "Nome",
            email: "E-mail",
            subject: 'Assunto',
            message: "Mensagem",
            button: "Enviar",
        },
        notFound: "Página não encontrada",
        rights: "Todos os direitos reservados"
    }
}

export default ptbr