import { SharingModule } from './../../../../../../apps/main-website/src/app/sharing/sharing.module';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ApplicationState, getCurrentRoute } from 'stores/application-state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NavigateToRouteAction } from 'stores/core';

@Component({
  selector: 'lib-ui-side-nav-item',
  standalone: true,
  imports: [
	CommonModule, 
	MatIconModule,
	SharingModule
],
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavItemComponent {
	@Input() sideNavIcon = 'device_unknown';
	@Input() sideNavText = 'test';
	@Input() sideNavUrl = 'home';

	protected sideNavItemActive: Observable<string> = this.store.pipe(select(getCurrentRoute));

	constructor(private store: Store<ApplicationState>) { }

	navigateToRoute(route: string) {
		this.store.dispatch(NavigateToRouteAction({routeToNavigateTo: route}));
	}
}
