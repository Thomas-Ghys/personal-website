import { Action, createReducer } from '@ngrx/store';
import { INITIAL_PROJECT_STATE, ProjectState } from "./project-state";

export const projectStateReducer = createReducer(
	INITIAL_PROJECT_STATE,
)

export function reducer(projectState: ProjectState = INITIAL_PROJECT_STATE, action: Action): ProjectState {
	return projectStateReducer(projectState, action);
}