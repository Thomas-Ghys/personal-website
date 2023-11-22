import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ApplicationState, fromUI, getUIMenuState } from '@personal-website/core';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { SidenavPanelComponent } from '../sidenav-panel/sidenav-panel.component';

@Component({
	selector: 'ui-sidenav-toggle',
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule,
		OverlayModule,
		SidenavPanelComponent
	],
	templateUrl: './sidenav-toggle.component.html',
	styleUrls: ['./sidenav-toggle.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavToggleComponent {
	protected menuState$: Observable<boolean> = this.store.pipe(select(getUIMenuState));
	protected menuState = false;
	
	constructor(private store: Store<ApplicationState>) {}

	toggleMenu() {
		this.menuState = !this.menuState;
		this.store.dispatch(fromUI.SetMenuStateAction());
	}
}
