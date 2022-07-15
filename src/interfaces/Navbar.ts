export type NavbarType = {
    langParams: {
        job: string
        menu: Array<{
            url: string,
            name: string,
        }>
    },
    lang: string,
    setLang(lang:string): void,
    toggleTheme():void,
    theme: string,
    menu: boolean,
    OpenClosedMenu():void
}