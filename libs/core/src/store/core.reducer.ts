import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CoreActions from './core.actions';
import { CoreEntity } from './core.models';

export const CORE_FEATURE_KEY = 'core';

export interface CoreState extends EntityState<CoreEntity> {
	selectedId?: string | number; // which Core record has been selected
	loaded: boolean; // has the Core list been loaded
	error?: string | null; // last known error (if any)
}

export interface CorePartialState {
	readonly [CORE_FEATURE_KEY]: CoreState;
}

export const coreAdapter: EntityAdapter<CoreEntity> =
	createEntityAdapter<CoreEntity>();

export const initialCoreState: CoreState = coreAdapter.getInitialState({
	// set initial required properties
	loaded: false,
});

const reducer = createReducer(
	initialCoreState,
	on(CoreActions.initCore, (state) => ({
		...state,
		loaded: false,
		error: null,
	})),
	on(CoreActions.loadCoreSuccess, (state, { core }) =>
		coreAdapter.setAll(core, { ...state, loaded: true })
	),
	on(CoreActions.loadCoreFailure, (state, { error }) => ({ ...state, error }))
);

export function coreReducer(state: CoreState | undefined, action: Action) {
	return reducer(state, action);
}
