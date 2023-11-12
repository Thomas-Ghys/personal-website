import { ApplicationState } from './../../../../../../stores/application-state';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getUIMenuState } from 'stores/application-state';
import { SetMenuStateAction } from 'stores/ui';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { SideNavComponent } from '../../layout/side-nav/side-nav.component';

@Component({
	selector: 'lib-ui-menu-toggle',
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule,
		OverlayModule,
		SideNavComponent
	],
	templateUrl: './menu-toggle.component.html',
	styleUrls: ['./menu-toggle.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuToggleComponent {
	protected menuState$: Observable<boolean> = this.store.pipe(select(getUIMenuState));
	protected menuState = false;
	
	constructor(private store: Store<ApplicationState>) {}

	toggleMenu() {
		this.menuState = !this.menuState;
		this.store.dispatch(SetMenuStateAction());
	}
}
