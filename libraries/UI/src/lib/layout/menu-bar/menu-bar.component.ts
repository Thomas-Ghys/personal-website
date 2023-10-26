import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'lib-ui-menu-bar',
	standalone: true,
	imports: [
		CommonModule
	],
	templateUrl: './menu-bar.component.html',
	styleUrls: ['./menu-bar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBarComponent {}
