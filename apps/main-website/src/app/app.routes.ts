import { Route } from '@angular/router';

export const appRoutes: Route[] = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: 'home',
		pathMatch: 'full',
		loadChildren: () => import('./../../../../libraries/home/src/lib/lib.routes').then((m) => m.homeRoutes)
	},
	{
		path: 'about',
		pathMatch: 'full',
		loadChildren: () => import('./../../../../libraries/about-me/src/lib/lib.routes').then((m) => m.aboutMeRoutes)
	},
	{
		path: 'projects',
		pathMatch: 'full',
		loadChildren: () => import('./../../../../libraries/project/src/lib/lib.routes').then((m) => m.projectRoutes)
	},
	{
		path: 'contact',
		pathMatch: 'full',
		loadChildren: () => import('./../../../../libraries/contact/src/lib/lib.routes').then((m) => m.contactRoutes)
	},
	{
		path: '**',
		redirectTo: 'home'
	}
];
