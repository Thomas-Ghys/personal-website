import { Action, createReducer, on } from '@ngrx/store';
import { INITIAL_PROJECT_STATE, ProjectState } from "./project-state";
import * as project from './actions';

export const projectStateReducer = createReducer(
	INITIAL_PROJECT_STATE,
)

export function reducer(projectState: ProjectState = INITIAL_PROJECT_STATE, action: Action): ProjectState {
	return projectStateReducer(projectState, action);
}