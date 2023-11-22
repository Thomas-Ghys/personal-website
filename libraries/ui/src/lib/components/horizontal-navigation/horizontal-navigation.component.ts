import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationItem } from '../../interfaces/navigationItem';
import { navigationData } from '../../data/navigationData';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ApplicationState, getCurrentRoute, fromCore } from '@personal-website/core';
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
	protected horizontalNavigationItems: NavigationItem[] = navigationData;
	protected sideNavItemActive: Observable<string> = this.store.pipe(select(getCurrentRoute));
	
	constructor(private store: Store<ApplicationState>) { }

	navigateToUrl(navigationRoute: string) {
		this.store.dispatch(fromCore.NavigateToRouteAction({routeToNavigateTo: navigationRoute}));
	}
}
