import { createAction, props } from '@ngrx/store';
import { UiEntity } from './ui.models';

export const initUi = createAction('[Ui Page] Init');

export const loadUiSuccess = createAction(
	'[Ui/API] Load Ui Success',
	props<{ ui: UiEntity[] }>()
);

export const loadUiFailure = createAction(
	'[Ui/API] Load Ui Failure',
	props<{ error: any }>()
);
