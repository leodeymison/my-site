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
            tools and a knowledge addict. The mind that opens itself to a new idea will never return to its original size - Albert Einstein
            `
        },
        about: {
            title: "About me",
            body: `My name is Leodeymison, I was born on 16/04/2003, my first contact with technology was at the age of 3, playing games on old phones.

            I began to fall in love with programming between 14 and 15 years, and soon began to study, two years later at the age of 17 I worked in my
            first wave of frontend developer (Internship), I stayed a month of internship and was effective, in this company I learned many things and acquired
            a lot of experience, Stayed there for 1 year, and started work to frelancer. 
            
            in the meantime I spent in some face-to-face and remote companies for short periods of time.  

            I have in mind that I need to be better 1% every day, with this my little rotinha joining work and study is in
            around 16 hours a day, in the morning I always try to exercise and do my devotionals, I do not consider myself a person who goes out much, but I have
            friends because of the strong bonds of friendships I acquired in the church. In addition to programming, artificial intelligence is something that fascinates me and that I'm always looking to learn a little bit about.
            `
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
            email: "Email",
            subject: 'Subject',
            message: "Mmessage",
            button: "Send",
        },
        notFound: "Page not found",
        rights: "All rights reserved"
    }
}

export default en