import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from '../../components/theme-switcher/theme-switcher.component';

@Component({
	selector: 'lib-ui-menu-bar',
	standalone: true,
	imports: [
		CommonModule,
		ThemeSwitcherComponent
	],
	templateUrl: './menu-bar.component.html',
	styleUrls: ['./menu-bar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBarComponent {}
