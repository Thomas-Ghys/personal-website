import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as UiActions from './ui.actions';
import { UiEffects } from './ui.effects';

describe('UiEffects', () => {
	let actions: Observable<Action>;
	let effects: UiEffects;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [],
			providers: [
				UiEffects,
				provideMockActions(() => actions),
				provideMockStore(),
			],
		});

		effects = TestBed.inject(UiEffects);
	});

	describe('init$', () => {
		it('should work', () => {
			actions = hot('-a-|', { a: UiActions.initUi() });

			const expected = hot('-a-|', {
				a: UiActions.loadUiSuccess({ ui: [] }),
			});

			expect(effects.init$).toBeObservable(expected);
		});
	});
});
