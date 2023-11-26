import { Action, createReducer, on } from '@ngrx/store';
import { INITIAL_CORE_STATE, CoreState } from "./core-state";
import * as core from './actions';

export const coreStateReducer = createReducer(
	INITIAL_CORE_STATE,
	on(core.SetCurrentRouteStateAction, (coreState, {currentRoute}) => ({
		...coreState,
		currentRoute: currentRoute
	})),
	on(core.NavigateToRouteAction, (coreState, {routeToNavigateTo}) => ({
		...coreState, 
		previousRoute: coreState.currentRoute,
		currentRoute: routeToNavigateTo
	}))
)

export function reducer(coreState: CoreState = INITIAL_CORE_STATE, action: Action): CoreState {
	return coreStateReducer(coreState, action);
}