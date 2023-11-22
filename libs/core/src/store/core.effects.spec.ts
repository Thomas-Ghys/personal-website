import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as CoreActions from './core.actions';
import { CoreEffects } from './core.effects';

describe('CoreEffects', () => {
	let actions: Observable<Action>;
	let effects: CoreEffects;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [],
			providers: [
				CoreEffects,
				provideMockActions(() => actions),
				provideMockStore(),
			],
		});

		effects = TestBed.inject(CoreEffects);
	});

	describe('init$', () => {
		it('should work', () => {
			actions = hot('-a-|', { a: CoreActions.initCore() });

			const expected = hot('-a-|', {
				a: CoreActions.loadCoreSuccess({ core: [] }),
			});

			expect(effects.init$).toBeObservable(expected);
		});
	});
});
