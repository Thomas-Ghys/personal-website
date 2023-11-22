import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CORE_FEATURE_KEY, CoreState, coreAdapter } from './core.reducer';

// Lookup the 'Core' feature state managed by NgRx
export const selectCoreState =
	createFeatureSelector<CoreState>(CORE_FEATURE_KEY);

const { selectAll, selectEntities } = coreAdapter.getSelectors();

export const selectCoreLoaded = createSelector(
	selectCoreState,
	(state: CoreState) => state.loaded
);

export const selectCoreError = createSelector(
	selectCoreState,
	(state: CoreState) => state.error
);

export const selectAllCore = createSelector(
	selectCoreState,
	(state: CoreState) => selectAll(state)
);

export const selectCoreEntities = createSelector(
	selectCoreState,
	(state: CoreState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
	selectCoreState,
	(state: CoreState) => state.selectedId
);

export const selectEntity = createSelector(
	selectCoreEntities,
	selectSelectedId,
	(entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
