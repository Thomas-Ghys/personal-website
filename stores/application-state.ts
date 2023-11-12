import {
	createFeatureSelector,
	createSelector
} from '@ngrx/store'
import { UIState } from './ui/ui-state';
import * as fromUI from './ui';
import * as fromCore from './core';

export interface ApplicationState {
	ui: fromUI.UIState;
	core: fromCore.CoreState
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
	ui: fromUI.INITIAL_UI_STATE,
	core: fromCore.INITIAL_CORE_STATE
}

export const reducers = {
	ui: fromUI.uiStateReducer,
	core: fromCore.coreStateReducer
}

export const effects = [
	fromCore.CoreEffectsService
]

/*----- START: Core Selectors -----*/
export const getCoreState = createFeatureSelector<fromCore.CoreState>('core');
export const getCurrentRoute = createSelector(getCoreState, fromCore.getCurrentRouteState);
export const getPreviousRoute = createSelector(getCoreState, fromCore.getPreviousRouteState);
/*----- END: Core Selectors -----*/

/*----- START: UI Selectors -----*/
export const getUIState = createFeatureSelector<UIState>('ui');
export const getUIMenuState = createSelector(getUIState, fromUI.getMenuState);
/*----- END: UI Selectors -----*/