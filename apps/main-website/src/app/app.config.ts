import * as fromApplicationState from '@personal-website/core';
import { ApplicationConfig } from '@angular/core';
import {
	provideRouter,
	withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from "@ngrx/store-devtools";

export const appConfig: ApplicationConfig = {
	providers: [
		provideEffects(fromApplicationState.effects),
		provideStore(fromApplicationState.reducers),
		provideRouter(
			appRoutes,
			withEnabledBlockingInitialNavigation()
		),
		provideStoreDevtools()
	],
};
