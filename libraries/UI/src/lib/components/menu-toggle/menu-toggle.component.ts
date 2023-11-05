import { ApplicationState } from './../../../../../../stores/application-state';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getUIMenuState } from 'stores/application-state';
import { SetMenuState } from 'stores/ui';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'lib-ui-menu-toggle',
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule
	],
	templateUrl: './menu-toggle.component.html',
	styleUrls: ['./menu-toggle.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuToggleComponent {
	protected menuState$: Observable<boolean> = this.store.pipe(select(getUIMenuState));
	
	constructor(private store: Store<ApplicationState>) {}

	toggleMenu() {
		this.store.dispatch(SetMenuState());
	}
}
