import { NavigateToRouteAction } from './actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApplicationState } from "../application-state";
import { Router } from "@angular/router";
import { Action, Store } from "@ngrx/store";
import { Observable, exhaustMap, tap } from "rxjs";
import * as core from './actions';
import { SetMenuStateAction } from 'stores/ui';


@Injectable()
export class ContactEffectsService {
	constructor(private actions$: Actions, 
				private store: Store<ApplicationState>, 
				private router: Router) {}
}