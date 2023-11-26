import { createAction, props } from "@ngrx/store";

export const SetMenuStateAction = createAction(
	'[UI] set menu state',
);

export const CloseMenuStateAction = createAction(
	'[UI] close menu state'
);

export const SetLanguageSelectorStateAction = createAction(
	'[UI] get language selector state',
);

export const ChangeLanguageAction = createAction(
	'[UI] change language',
	props<{language: string}>()
);