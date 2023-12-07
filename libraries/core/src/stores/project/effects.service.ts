import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApplicationState } from "../application-state";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";


@Injectable()
export class ProjectEffectsService {
	constructor(private actions$: Actions, 
				private store: Store<ApplicationState>, 
				private router: Router) {}	
}