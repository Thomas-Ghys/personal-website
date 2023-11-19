import { BreakpointObserverDirective } from 'directives/breakpoint-observer/breakpoint-observer.directive';
import { BreakpointMatcherDirective } from './../../../../../../directives/breakpoint-matcher/breakpoint-matcher.directive';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from '../../components/theme-switcher/theme-switcher.component';
import { MenuToggleComponent } from './../../components/menu-toggle/menu-toggle.component';
import { LanguageSwitcherComponent } from './../../components/language-switcher/language-switcher.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { UIRootModule } from 'libraries/UI/src/ui.root.module';
import { MenuBarNavigationListComponent } from "../../components/menu-bar-navigation-list/menu-bar-navigation-list.component";

@Component({
    selector: 'lib-ui-menu-bar',
    standalone: true,
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ThemeSwitcherComponent,
        MenuToggleComponent,
        LanguageSwitcherComponent,
        SideNavComponent,
        UIRootModule,
        BreakpointMatcherDirective,
		BreakpointObserverDirective,
        MenuBarNavigationListComponent
    ]
})
export class MenuBarComponent {

}
