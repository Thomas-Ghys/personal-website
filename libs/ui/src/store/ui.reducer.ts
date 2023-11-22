import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as UiActions from './ui.actions';
import { UiEntity } from './ui.models';

export const UI_FEATURE_KEY = 'ui';

export interface UiState extends EntityState<UiEntity> {
	selectedId?: string | number; // which Ui record has been selected
	loaded: boolean; // has the Ui list been loaded
	error?: string | null; // last known error (if any)
}

export interface UiPartialState {
	readonly [UI_FEATURE_KEY]: UiState;
}

export const uiAdapter: EntityAdapter<UiEntity> =
	createEntityAdapter<UiEntity>();

export const initialUiState: UiState = uiAdapter.getInitialState({
	// set initial required properties
	loaded: false,
});

const reducer = createReducer(
	initialUiState,
	on(UiActions.initUi, (state) => ({ ...state, loaded: false, error: null })),
	on(UiActions.loadUiSuccess, (state, { ui }) =>
		uiAdapter.setAll(ui, { ...state, loaded: true })
	),
	on(UiActions.loadUiFailure, (state, { error }) => ({ ...state, error }))
);

export function uiReducer(state: UiState | undefined, action: Action) {
	return reducer(state, action);
}
