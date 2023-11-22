import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as CoreActions from './core.actions';
import * as CoreFeature from './core.reducer';

@Injectable()
export class CoreEffects {
	private actions$ = inject(Actions);

	init$ = createEffect(() =>
		this.actions$.pipe(
			ofType(CoreActions.initCore),
			switchMap(() => of(CoreActions.loadCoreSuccess({ core: [] }))),
			catchError((error) => {
				console.error('Error', error);
				return of(CoreActions.loadCoreFailure({ error }));
			})
		)
	);
}
