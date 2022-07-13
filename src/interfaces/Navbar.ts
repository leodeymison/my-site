export type NavbarType = {
    lang: {
        job: string
        menu: Array<{
            url: string,
            name: string,
        }>
    },
    setLang: Function
}