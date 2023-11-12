export interface CoreState {
	currentRoute: string,
	previousRoute: string
}

export const INITIAL_CORE_STATE: CoreState = {
	currentRoute: '',
	previousRoute: ''
}