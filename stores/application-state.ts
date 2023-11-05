import {
	createFeatureSelector,
	createSelector
} from '@ngrx/store'
import { UIState } from './ui/ui-state';
import * as fromUI from './ui';

export interface ApplicationState {
	ui: fromUI.UIState;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
	ui: fromUI.INITIAL_UI_STATE
}

export const reducers = {
	ui: fromUI.uiStateReducer
}

/*----- START: UI Selectors -----*/
export const getUIState = createFeatureSelector<UIState>('ui');
export const getUIMenuState = createSelector(getUIState, fromUI.getMenuState);
/*----- END: UI Selectors -----*/