import { LangsType } from "./types";
import { css, graphql, html, js, node, react, styled, ts, vue } from './icons.ds';
import Tecs from './tecs';

const en:LangsType = {
    title: "en",
    navbar: {
        job: "FullStack develop",
        menu: [
            {
                name: "Home",
                url: "/"
            },
            {
                name: "About me",
                url: "/about"
            },
            {
                name: "Projects",
                url: "/projects"
            },
            {
                name: "Contacts",
                url: "/contact"
            }
        ]
    },
    pags: {
        who: {
            title: "Who am I?",
            body: `
            I am a FullStack programmer passionate about creating life-changing 
            tools and a knowledge addict. The mind that opens itself to a new 
            idea will never return to its original size - Albert Einstein:
            `
        },
        about: {
            title: "About me",
            body: "My name is Leodeymison"
        },
        tec: {
            title: "Technologies",
            tecs: Tecs
        },
        projects: {
            title: "Projects",
            list: [
                {
                    id: 1,
                    title: "Project Manager",
                    icons: [react, js, html, css],
                    links: [
                        {
                            name: "Code",
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
                            name: "Code",
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
                            name: "Code",
                            url: "https://github.com/leodeymison/pokedex",
                            target: true
                        },
                    ]
                },
                {
                    id: 4,
                    title: "Sending files",
                    icons: [node, js],
                    links: [
                        {
                            name: "Code",
                            url: "https://github.com/leodeymison/upload-de-arquivos-backend",
                            target: true
                        },
                    ]
                },
                {
                    id: 5,
                    title: "E-commerce simulator",
                    icons: [react, ts, styled, html, css],
                    links: [
                        {
                            name: "Code",
                            url: "https://github.com/leodeymison/codeby",
                            target: true
                        },
                        {
                            name: "Page",
                            url: "https://codeby-demo.netlify.app/",
                            target: true
                        }
                    ]
                }
            ]
        },
        contact: {
            title: "Contacts",
            name: "Name",
            subject: 'Subject',
            message: "Mmessage",
            button: "Send",
        },
        notFound: "Page not found",
        rights: "All rights reserved"
    }
}

export default en