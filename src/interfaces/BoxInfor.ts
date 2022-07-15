import { ProjectList } from "./Projects"
import { Contact } from './Contact'

export type BoxInforType = {
    title: string,
    body?: string,
    tecs?: Array<{
        name: string,
        level: Array<boolean>
    }>,
    projects?: Array<ProjectList>,
    contact?: Contact
}