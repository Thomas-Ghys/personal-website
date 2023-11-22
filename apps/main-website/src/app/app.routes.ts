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
		redirectTo: 'home'
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
