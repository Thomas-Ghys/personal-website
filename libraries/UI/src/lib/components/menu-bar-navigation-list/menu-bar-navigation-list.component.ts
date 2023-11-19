import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navigationData } from '../../data/navigationData';
import { NavigationItem } from '../../interfaces/navigationItem';
import { Store, select } from '@ngrx/store';
import { ApplicationState, getCurrentRoute } from 'stores/application-state';
import { NavigateToRouteAction } from 'stores/core';
import { UIRootModule } from 'libraries/UI/src/ui.root.module';
import { Observable } from 'rxjs';

@Component({
	selector: 'lib-ui-menu-bar-navigation-list',
	standalone: true,
	imports: [
		CommonModule,
		UIRootModule
	],
	templateUrl: './menu-bar-navigation-list.component.html',
	styleUrls: ['./menu-bar-navigation-list.component.scss'],
})
export class MenuBarNavigationListComponent {
	protected horizontalNavigationItems: NavigationItem[] = navigationData;
	protected sideNavItemActive: Observable<string> = this.store.pipe(select(getCurrentRoute));
	
	constructor(private store: Store<ApplicationState>) { }

	navigateToUrl(navigationRoute: string) {
		this.store.dispatch(NavigateToRouteAction({routeToNavigateTo: navigationRoute}));
	}
}
