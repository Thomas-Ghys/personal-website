import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as UiActions from './ui.actions';
import * as UiFeature from './ui.reducer';

@Injectable()
export class UiEffects {
	private actions$ = inject(Actions);

	init$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UiActions.initUi),
			switchMap(() => of(UiActions.loadUiSuccess({ ui: [] }))),
			catchError((error) => {
				console.error('Error', error);
				return of(UiActions.loadUiFailure({ error }));
			})
		)
	);
}
