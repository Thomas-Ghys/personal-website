import { createAction, props } from "@ngrx/store";

export const GetMenuStateAction = createAction(
	'[UI] get menu state',
)

export const SetMenuStateAction = createAction(
	'[UI] get menu state',
)

export const GetLanguageSelectorStateAction = createAction(
	'[UI] get language selector state',
)

export const SetLanguageSelectorStateAction = createAction(
	'[UI] get language selector state',
)

export const GetCurrentSelectedLanguageAction = createAction(
	'[UI] get currently selected language state',
)

export const ChangeLanguageAction = createAction(
	'[UI] change language',
	props<{language: string}>()
)