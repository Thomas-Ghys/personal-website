import { UiEntity } from './ui.models';
import { uiAdapter, UiPartialState, initialUiState } from './ui.reducer';
import * as UiSelectors from './ui.selectors';

describe('Ui Selectors', () => {
	const ERROR_MSG = 'No Error Available';
	const getUiId = (it: UiEntity) => it.id;
	const createUiEntity = (id: string, name = '') =>
		({
			id,
			name: name || `name-${id}`,
		} as UiEntity);

	let state: UiPartialState;

	beforeEach(() => {
		state = {
			ui: uiAdapter.setAll(
				[
					createUiEntity('PRODUCT-AAA'),
					createUiEntity('PRODUCT-BBB'),
					createUiEntity('PRODUCT-CCC'),
				],
				{
					...initialUiState,
					selectedId: 'PRODUCT-BBB',
					error: ERROR_MSG,
					loaded: true,
				}
			),
		};
	});

	describe('Ui Selectors', () => {
		it('selectAllUi() should return the list of Ui', () => {
			const results = UiSelectors.selectAllUi(state);
			const selId = getUiId(results[1]);

			expect(results.length).toBe(3);
			expect(selId).toBe('PRODUCT-BBB');
		});

		it('selectEntity() should return the selected Entity', () => {
			const result = UiSelectors.selectEntity(state) as UiEntity;
			const selId = getUiId(result);

			expect(selId).toBe('PRODUCT-BBB');
		});

		it('selectUiLoaded() should return the current "loaded" status', () => {
			const result = UiSelectors.selectUiLoaded(state);

			expect(result).toBe(true);
		});

		it('selectUiError() should return the current "error" state', () => {
			const result = UiSelectors.selectUiError(state);

			expect(result).toBe(ERROR_MSG);
		});
	});
});
