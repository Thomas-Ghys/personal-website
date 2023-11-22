import { CoreEntity } from './core.models';
import {
	coreAdapter,
	CorePartialState,
	initialCoreState,
} from './core.reducer';
import * as CoreSelectors from './core.selectors';

describe('Core Selectors', () => {
	const ERROR_MSG = 'No Error Available';
	const getCoreId = (it: CoreEntity) => it.id;
	const createCoreEntity = (id: string, name = '') =>
		({
			id,
			name: name || `name-${id}`,
		} as CoreEntity);

	let state: CorePartialState;

	beforeEach(() => {
		state = {
			core: coreAdapter.setAll(
				[
					createCoreEntity('PRODUCT-AAA'),
					createCoreEntity('PRODUCT-BBB'),
					createCoreEntity('PRODUCT-CCC'),
				],
				{
					...initialCoreState,
					selectedId: 'PRODUCT-BBB',
					error: ERROR_MSG,
					loaded: true,
				}
			),
		};
	});

	describe('Core Selectors', () => {
		it('selectAllCore() should return the list of Core', () => {
			const results = CoreSelectors.selectAllCore(state);
			const selId = getCoreId(results[1]);

			expect(results.length).toBe(3);
			expect(selId).toBe('PRODUCT-BBB');
		});

		it('selectEntity() should return the selected Entity', () => {
			const result = CoreSelectors.selectEntity(state) as CoreEntity;
			const selId = getCoreId(result);

			expect(selId).toBe('PRODUCT-BBB');
		});

		it('selectCoreLoaded() should return the current "loaded" status', () => {
			const result = CoreSelectors.selectCoreLoaded(state);

			expect(result).toBe(true);
		});

		it('selectCoreError() should return the current "error" state', () => {
			const result = CoreSelectors.selectCoreError(state);

			expect(result).toBe(ERROR_MSG);
		});
	});
});
