import {
	createFeatureSelector,
	createSelector
} from '@ngrx/store'
import { UIState } from './ui/ui-state';
import * as fromUI from './ui';
import * as fromCore from './core';
import * as fromContact from './contact';
import * as fromProject from './project';

export interface ApplicationState {
	ui: fromUI.UIState;
	core: fromCore.CoreState;
	contact: fromContact.ContactState;
	project: fromProject.ProjectState
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
	ui: fromUI.INITIAL_UI_STATE,
	core: fromCore.INITIAL_CORE_STATE,
	contact: fromContact.INITIAL_CONTACT_STATE,
	project: fromProject.INITIAL_PROJECT_STATE
}

export const reducers = {
	ui: fromUI.uiStateReducer,
	core: fromCore.coreStateReducer,
	contact: fromContact.contactStateReducer,
	project: fromProject.projectStateReducer
}

export const effects = [
	fromCore.CoreEffectsService,
	fromUI.UIEffectsService,
	fromContact.ContactEffectsService,
	fromProject.ProjectEffectsService
]

// ----- START: Contact Selectors ----- //
export const selectContactState = createFeatureSelector<fromContact.ContactState>('contact');

export const selectContactOptions = createSelector(selectContactState, fromContact.getContactOptions);
// ----- END: Contact Selectors ----- //

// ----- START: Core Selectors ----- //
export const selectCoreState = createFeatureSelector<fromCore.CoreState>('core');

export const selectCurrentRoute = createSelector(selectCoreState, fromCore.getCurrentRouteState);
export const selectPreviousRoute = createSelector(selectCoreState, fromCore.getPreviousRouteState);
// ----- END: Core Selectors ----- //

// ----- START: Project Selectors ----- //
export const selectProjectState = createFeatureSelector<fromProject.ProjectState>('project');

export const selectProjects = createSelector(selectProjectState, fromProject.getProjectOptions);
// ----- END: Project Selectors ----- //

// ----- START: UI Selectors ----- //
export const selectUIState = createFeatureSelector<UIState>('ui');

export const selectUIMenuState = createSelector(selectUIState, fromUI.getMenuState);
export const selectLanguageSelectorState = createSelector(selectUIState, fromUI.getLanguageSelectorState);
export const selectSelectedLanguage = createSelector(selectUIState, fromUI.getCurrentSelectedLanguage);
export const selectNavigationItems = createSelector(selectUIState, fromUI.getSupportedNavigationItems);
export const selectSupportedLanguages = createSelector(selectUIState, fromUI.getSupportedLanguages);
// ----- END: UI Selectors ----- //