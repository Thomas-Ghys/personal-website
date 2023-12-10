import { Route } from '@angular/router';

export const appRoutes: Route[] = [
	{
		path: 'home',
		loadChildren: () => import('@personal-website/home').then((m) => m.homeRoutes)
	},
	{
		path: 'about',
		loadChildren: () => import('@personal-website/about-me').then((m) => m.aboutMeRoutes)
	},
	{
		path: 'projects',
		loadChildren: () => import('@personal-website/project').then((m) => m.projectRoutes)
	},
	{
		path: 'contact',
		loadChildren: () => import('@personal-website/contact').then((m) => m.contactRoutes)
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: '**',
		redirectTo: 'home'
	}
];
