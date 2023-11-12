import { Action, createReducer, on } from '@ngrx/store';
import { INITIAL_UI_STATE, UIState } from "./ui-state";
import * as ui from './actions';

export const uiStateReducer = createReducer(
	INITIAL_UI_STATE,
	on(ui.SetMenuStateAction, uiState => ({...uiState, menuState: !uiState.menuState}))
)

export function reducer(uiState: UIState = INITIAL_UI_STATE, action: Action): UIState {
	return uiStateReducer(uiState, action);
}

export const getMenuState = (uiState: UIState): boolean => uiState.menuState;