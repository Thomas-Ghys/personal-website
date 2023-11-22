import { Injectable } from "@angular/core";
import { Actions } from '@ngrx/effects';
import { ApplicationState } from "../application-state";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";


@Injectable()
export class ContactEffectsService {
	constructor(private actions$: Actions, 
				private store: Store<ApplicationState>, 
				private router: Router) {}
}