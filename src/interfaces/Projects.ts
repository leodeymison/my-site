export type ProjectType = {
    projects: Project
}

export type Project = {
    title: string,
    list: Array<ProjectList>
}

export type ProjectList = {
    icons: Array<string>,
    title: string,
    links: Array<{
        name: string,
        url: string,
        target: boolean
    }>
    id?: string | number
}