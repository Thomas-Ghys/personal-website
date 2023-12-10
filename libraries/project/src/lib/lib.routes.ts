import { Route } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { PersonalWebsiteComponent } from './projects/personal-website/personal-website.component';

export const projectRoutes: Route[] = [
	{
		path: '',
		children: [
			{
				path: 'overview',
				component: ProjectComponent,
				children: [
					{
						path: 'personal-website',
						component: PersonalWebsiteComponent
					}
				]
			},
			{
				path: 'personal-website',
				component: PersonalWebsiteComponent
			},
			{
				path: '',
				redirectTo: 'overview',
				pathMatch: 'full'
			}
		]
	}
];
