import { reducers } from './../../../../stores/application-state';
import { ApplicationConfig } from '@angular/core';
import {
	provideRouter,
	withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromApplicationState from './../../../../stores/application-state';

export const appConfig: ApplicationConfig = {
	providers: [
		provideEffects(),
		provideStore(fromApplicationState.reducers),
		provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
	],
};
