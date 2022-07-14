import { ProjectList } from "./Projects"

export type BoxInforType = {
    title: string,
    body?: string,
    tecs?: Array<{
        name: string,
        level: Array<boolean>
    }>,
    projects?: Array<ProjectList>,
    contact?: boolean
}