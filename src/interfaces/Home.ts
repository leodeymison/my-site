import { About, Tec } from "./About";
import { Project } from "./Projects";
import { Contact } from "./Contact";

export type HomeType = {
    pags: {
        about: About,
        tec: Tec,
        projects: Project,
        contact: Contact,
        who: About
    }
}