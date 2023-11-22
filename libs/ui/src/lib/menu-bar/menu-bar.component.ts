import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserverDirective, BreakpointMatcherDirective } from '@personal-website/core'; 
import { UiRootModule } from '../../ui.root.module';

@Component({
	selector: 'ui-menu-bar',
	standalone: true,
	imports: [
		CommonModule,
		BreakpointObserverDirective,
		BreakpointMatcherDirective,
		UiRootModule
	],
	templateUrl: './menu-bar.component.html',
	styleUrls: ['./menu-bar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBarComponent {}
