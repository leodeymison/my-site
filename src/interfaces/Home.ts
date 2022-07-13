export type HomeType = {
    lang: {
        about: {
            title: string,
            body: string
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
                id: string | number,
                title: string,
                image: string
            }>
        },
        contact: {
            title: string
        }
    }
}