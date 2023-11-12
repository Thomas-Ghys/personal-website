import { Route } from '@angular/router';
import { AppComponent } from './app.component';

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
		path: 'contact',
		pathMatch: 'full',
		loadChildren: () => import('./../../../../libraries/contact/src/lib/lib.routes').then((m) => m.contactRoutes)
	},
	{
		path: '**',
		redirectTo: 'home'
	}
];
