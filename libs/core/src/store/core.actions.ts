import { createAction, props } from '@ngrx/store';
import { CoreEntity } from './core.models';

export const initCore = createAction('[Core Page] Init');

export const loadCoreSuccess = createAction(
	'[Core/API] Load Core Success',
	props<{ core: CoreEntity[] }>()
);

export const loadCoreFailure = createAction(
	'[Core/API] Load Core Failure',
	props<{ error: any }>()
);
