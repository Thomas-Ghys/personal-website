
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from '../../components/theme-switcher/theme-switcher.component';
import { MenuToggleComponent } from './../../components/menu-toggle/menu-toggle.component';
import { LanguageSwitcherComponent } from './../../components/language-switcher/language-switcher.component';

@Component({
	selector: 'lib-ui-menu-bar',
	standalone: true,
	imports: [
		CommonModule,
		ThemeSwitcherComponent,
		MenuToggleComponent,
		LanguageSwitcherComponent
	],
	templateUrl: './menu-bar.component.html',
	styleUrls: ['./menu-bar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBarComponent {}
