import { ProjectCard } from "../../types/ProjectCardType";
import { ProjectState } from "./project-state";

export const getProjectOptions = (projectState: ProjectState): ProjectCard[] => projectState.projects;