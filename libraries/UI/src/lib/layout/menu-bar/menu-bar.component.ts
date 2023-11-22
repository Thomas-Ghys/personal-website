import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { 
	ApplicationState, 
	BreakpointMatcherDirective, 
	BreakpointObserverDirective, 
	fromCore 
} from '@personal-website/core';
import { UiRootModule } from './../../../ui.root.module';
import { HorizontalNavigationComponent } from '../../components/horizontal-navigation/horizontal-navigation.component';
import { SidenavToggleComponent } from '../../components/sidenav-toggle/sidenav-toggle.component';
import { LanguageSwitcherComponent } from '../../components/language-switcher/language-switcher.component';
import { ThemeSwitcherComponent } from '../../components/theme-switcher/theme-switcher.component';

@Component({
	selector: 'ui-menu-bar',
	standalone: true,
	imports: [
		CommonModule,
		UiRootModule,
		BreakpointMatcherDirective,
		BreakpointObserverDirective,
		SidenavToggleComponent,
		HorizontalNavigationComponent,
		LanguageSwitcherComponent,
		ThemeSwitcherComponent
	],
	templateUrl: './menu-bar.component.html',
	styleUrls: ['./menu-bar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBarComponent {
	constructor(private store: Store<ApplicationState>) {}

	navigateToHome() {
		this.store.dispatch(fromCore.NavigateToRouteAction({routeToNavigateTo: 'home'}));
	}
}
