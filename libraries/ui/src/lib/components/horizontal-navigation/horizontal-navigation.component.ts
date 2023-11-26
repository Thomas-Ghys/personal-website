import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ApplicationState, selectCurrentRoute, fromCore, selectNavigationItems, NavigationItem } from '@personal-website/core';
import { UiRootModule } from 'libraries/ui/src/ui.root.module';

@Component({
	selector: 'ui-horizontal-navigation',
	standalone: true,
	imports: [
		CommonModule,
		UiRootModule
	],
	templateUrl: './horizontal-navigation.component.html',
	styleUrls: ['./horizontal-navigation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalNavigationComponent {
	protected horizontalNavigationItems$: Observable<NavigationItem[]> = this.store.pipe(select(selectNavigationItems));
	protected sideNavItemActive: Observable<string> = this.store.pipe(select(selectCurrentRoute));
	
	constructor(private store: Store<ApplicationState>) { }

	navigateToUrl(navigationRoute: string) {
		this.store.dispatch(fromCore.NavigateToRouteAction({routeToNavigateTo: navigationRoute}));
	}
}
