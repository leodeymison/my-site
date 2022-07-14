import { LangsType } from "./types";
import { js } from './icons.ds';

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
        about: {
            title: "About me",
            body: "My name is Leodeymison"
        },
        tec: {
            title: "Technologies",
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
            title: "Projects",
            list: [
                {
                    id: 1,
                    title: "project 01",
                    icons: [js, ""],
                    links: [
                        {
                            name: "Code",
                            url: "/",
                            target: true
                        },
                        {
                            name: "More",
                            url: "/",
                            target: true
                        }
                    ]
                },
                {
                    id: 2,
                    title: "project 02",
                    icons: [js, ""],
                    links: [
                        {
                            name: "Code",
                            url: "/",
                            target: true
                        },
                        {
                            name: "More",
                            url: "/",
                            target: true
                        }
                    ]
                }
            ]
        },
        contact: {
            title: "Contacts"
        },
        notFound: "Page not found"
    }
}

export default en