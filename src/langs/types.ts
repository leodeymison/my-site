export type LangsType = {
    title: string,
    navbar: {
        job: string,
        menu: Array<{
            name: string,
            url: string,
        }>
    },
    pags: {
        about: {
            title: string,
            body: string,
        },
        tec: {
            title: string,
            tecs: Array<{
                name: string,
                level: Array<boolean>
            }>
        },
        projects: {
            title: string,
            list: Array<{
                id: number | string,
                title: string,
                icons: Array<string>,
                links: Array<{
                    name: string,
                    url: string,
                    target: boolean
                }>
            }>
        },
        contact: {
            title: string,
        },
        notFound: string
    }
}