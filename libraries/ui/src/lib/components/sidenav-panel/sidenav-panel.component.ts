import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ApplicationState, selectCurrentRoute, fromCore, NavigationItem, selectNavigationItems } from '@personal-website/core';
import { UiRootModule } from 'libraries/ui/src/ui.root.module';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'ui-sidenav-panel',
	standalone: true,
	imports: [
		CommonModule,
		MatIconModule,
		UiRootModule
	],
	templateUrl: './sidenav-panel.component.html',
	styleUrls: ['./sidenav-panel.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavPanelComponent {
	protected sideNavItemConfiguration$: Observable<NavigationItem[]> = this.store.pipe(select(selectNavigationItems));
	protected sideNavItemActive: Observable<string> = this.store.pipe(select(selectCurrentRoute));

	constructor(private store: Store<ApplicationState>) { }

	navigateToRoute(route: string) {
		this.store.dispatch(fromCore.NavigateToRouteAction({routeToNavigateTo: route}));
	}
}
