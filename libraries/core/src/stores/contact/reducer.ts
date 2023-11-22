import { Action, createReducer } from '@ngrx/store';
import { ContactState, INITIAL_CONTACT_STATE } from "./contact-state";

export const contactStateReducer = createReducer(
	INITIAL_CONTACT_STATE,
)

export function reducer(contactState: ContactState = INITIAL_CONTACT_STATE, action: Action): ContactState {
	return contactStateReducer(contactState, action);
}