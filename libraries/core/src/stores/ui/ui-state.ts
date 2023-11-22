export interface UIState {
	menuState: boolean,
	languageSelectorState: boolean,
	currentLanguage: string
}

export const INITIAL_UI_STATE: UIState = {
	menuState: false,
	languageSelectorState: false,
	currentLanguage: ''
}