import { LangsType } from "./types";
import { js } from './icons.ds';

const ptbr:LangsType = {
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
        about: {
            title: "Sobre mim",
            body: "Me chamo Leodeymison, nasci em 16/04/2003, com naturalidade brasileira"
        },
        tec: {
            title: "Tecnologias",
            tecs: [
                {
                    name: "JavaScript",
                    level: [true, true, true, true, true, true, true, true, true, false]
                },
                {
                    name: "TypeScript",
                    level: [true, true, true, true, true, true, true, false, false, false]
                },
                {
                    name: "React",
                    level: [true, true, true, true, true, true, true, false, false, false]
                }
            ]
        },
        projects: {
            title: "Projetos",
            list: [
                {
                    id: 1,
                    title: "Projeto 01",
                    icons: [js, js],
                    links: [
                        {
                            name: "Código",
                            url: "/",
                            target: true
                        },
                        {
                            name: "Mais",
                            url: "/",
                            target: true
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Projeto 02",
                    icons: [js, ""],
                    links: [
                        {
                            name: "Código",
                            url: "/",
                            target: true
                        },
                        {
                            name: "Mais",
                            url: "/",
                            target: true
                        }
                    ]
                }
            ]
        },
        contact: {
            title: "Contatos"
        },
        notFound: "Página não encontrada"
    }
}

export default ptbr