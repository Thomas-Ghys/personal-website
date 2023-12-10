import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApplicationState } from "../application-state";
import { Router } from "@angular/router";
import { Action, Store } from "@ngrx/store";
import { Observable, tap } from "rxjs";
import * as core from './actions';
import { CloseMenuStateAction } from "../ui";


@Injectable()
export class CoreEffectsService {
	constructor(private actions$: Actions, 
				private store: Store<ApplicationState>, 
				private router: Router) {}

	navigateToRouteAction$: Observable<Action> = createEffect(() => this.actions$.pipe(
		ofType(core.NavigateToRouteAction),
		tap((action) => {
			this.store.dispatch(CloseMenuStateAction());
			this.router.navigate([action.routeToNavigateTo]);
		})
	), {dispatch: false});

	openBlankTargetAction$: Observable<Action> = createEffect(() => this.actions$.pipe(
		ofType(core.OpenBlankTargetAction),
		tap((action) => {
			console.log(action.route);
			window.open(action.route, '_blank')?.focus();
		})
	), {dispatch: false});
}