import { ProjectCard } from "./../../types/ProjectCardType";

export interface ProjectState {
	projects: ProjectCard[];
}

export const INITIAL_PROJECT_STATE: ProjectState = {
	projects: [
		{
			projectImage: 'assets/pictures/publicWebsiteProject.jpg',
			projectTags: [],
			projectName: 'project.project-card.personal-website.name',
			projectDescription: [
				'project.project-card.personal-website.description.0'
			],
			projectUrl: 'projects/personal-website'
		}
	]
}