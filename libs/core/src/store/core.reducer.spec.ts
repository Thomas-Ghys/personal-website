import { Action } from '@ngrx/store';

import * as CoreActions from './core.actions';
import { CoreEntity } from './core.models';
import { CoreState, initialCoreState, coreReducer } from './core.reducer';

describe('Core Reducer', () => {
	const createCoreEntity = (id: string, name = ''): CoreEntity => ({
		id,
		name: name || `name-${id}`,
	});

	describe('valid Core actions', () => {
		it('loadCoreSuccess should return the list of known Core', () => {
			const core = [
				createCoreEntity('PRODUCT-AAA'),
				createCoreEntity('PRODUCT-zzz'),
			];
			const action = CoreActions.loadCoreSuccess({ core });

			const result: CoreState = coreReducer(initialCoreState, action);

			expect(result.loaded).toBe(true);
			expect(result.ids.length).toBe(2);
		});
	});

	describe('unknown action', () => {
		it('should return the previous state', () => {
			const action = {} as Action;

			const result = coreReducer(initialCoreState, action);

			expect(result).toBe(initialCoreState);
		});
	});
});
