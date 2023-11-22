import { Action } from '@ngrx/store';

import * as UiActions from './ui.actions';
import { UiEntity } from './ui.models';
import { UiState, initialUiState, uiReducer } from './ui.reducer';

describe('Ui Reducer', () => {
	const createUiEntity = (id: string, name = ''): UiEntity => ({
		id,
		name: name || `name-${id}`,
	});

	describe('valid Ui actions', () => {
		it('loadUiSuccess should return the list of known Ui', () => {
			const ui = [
				createUiEntity('PRODUCT-AAA'),
				createUiEntity('PRODUCT-zzz'),
			];
			const action = UiActions.loadUiSuccess({ ui });

			const result: UiState = uiReducer(initialUiState, action);

			expect(result.loaded).toBe(true);
			expect(result.ids.length).toBe(2);
		});
	});

	describe('unknown action', () => {
		it('should return the previous state', () => {
			const action = {} as Action;

			const result = uiReducer(initialUiState, action);

			expect(result).toBe(initialUiState);
		});
	});
});
