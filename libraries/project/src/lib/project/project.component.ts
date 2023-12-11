import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from "../components/project-card/project-card.component";
import { Store, select } from '@ngrx/store';
import { ApplicationState, ProjectCard, fromCore, selectProjects } from '@personal-website/core';
import { Observable } from 'rxjs';
import { ProjectRootModule } from '../../project.root.module';

@Component({
    selector: 'lib-project-project',
    standalone: true,
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    imports: [
		CommonModule, 
		ProjectCardComponent,
		ProjectRootModule
	]
})
export class ProjectComponent implements OnInit {
	public projects$: Observable<ProjectCard[]> = this.store.pipe(select(selectProjects));

	constructor(private store: Store<ApplicationState>) { }

	ngOnInit(): void {
		this.store.dispatch(fromCore.SetCurrentRouteStateAction({currentRoute: 'projects'}));
	}
}
