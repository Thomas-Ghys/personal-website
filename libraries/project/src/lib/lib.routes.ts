import { Route } from '@angular/router';
import { ProjectComponent } from './project/project.component';

export const projectRoutes: Route[] = [
	{ 
		path: '',
		children: [
			{
				path: '',
				pathMatch: 'full',
				component: ProjectComponent,
				children: [
					
				]
			}
		] 
	},
];
