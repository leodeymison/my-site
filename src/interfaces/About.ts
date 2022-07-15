export type AboutType = {
    about: About,
    tec: Tec,
}

export type About = {
    title: string,
    body: string
}

export type Tec = {
    title: string,
    tecs: Array<{
        name: string,
        level: Array<boolean>
    }>
}