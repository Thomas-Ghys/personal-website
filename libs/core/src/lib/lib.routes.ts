import { Route } from '@angular/router';
import { CoreEffects } from './../store/core.effects';
import * as fromCore from './../store/core.reducer';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

export const coreRoutes: Route[] = [
	{
		path: '',
		providers: [
			provideState(fromCore.CORE_FEATURE_KEY, fromCore.coreReducer),
			provideEffects([CoreEffects])
		]
	}
];
