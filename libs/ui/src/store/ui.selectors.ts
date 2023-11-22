import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UI_FEATURE_KEY, UiState, uiAdapter } from './ui.reducer';

// Lookup the 'Ui' feature state managed by NgRx
export const selectUiState = createFeatureSelector<UiState>(UI_FEATURE_KEY);

const { selectAll, selectEntities } = uiAdapter.getSelectors();

export const selectUiLoaded = createSelector(
	selectUiState,
	(state: UiState) => state.loaded
);

export const selectUiError = createSelector(
	selectUiState,
	(state: UiState) => state.error
);

export const selectAllUi = createSelector(selectUiState, (state: UiState) =>
	selectAll(state)
);

export const selectUiEntities = createSelector(
	selectUiState,
	(state: UiState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
	selectUiState,
	(state: UiState) => state.selectedId
);

export const selectEntity = createSelector(
	selectUiEntities,
	selectSelectedId,
	(entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
