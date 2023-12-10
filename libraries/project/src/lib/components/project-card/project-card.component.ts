import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationState, ProjectCard } from '@personal-website/core';
import { ProjectRootModule } from 'libraries/project/src/project.root.module';
import { Store } from '@ngrx/store';
import { NavigateToRouteAction } from 'libraries/core/src/stores/core';

@Component({
	selector: 'lib-project-project-card',
	standalone: true,
	imports: [
		CommonModule,
		ProjectRootModule
	],
	templateUrl: './project-card.component.html',
	styleUrls: ['./project-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
	@Input() project: ProjectCard = {
		projectImage: '',
		projectTags: [],
		projectName: '',
		projectDescription: [],
		projectUrl: ''
	};

	constructor(private store: Store<ApplicationState>) { }

	navigateToProject(url: string) {
		this.store.dispatch(NavigateToRouteAction({routeToNavigateTo: url}));
	}
}
