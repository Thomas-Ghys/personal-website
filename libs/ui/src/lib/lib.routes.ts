import { provideState } from '@ngrx/store';
import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import * as fromUi from './../store/ui.reducer';
import { UiEffects } from './../store/ui.effects';

export const uiRoutes: Route[] = [
	{
		path: '',
		providers: [
			provideState(fromUi.UI_FEATURE_KEY, fromUi.uiReducer),
			provideEffects([UiEffects])
		]
	}
];
