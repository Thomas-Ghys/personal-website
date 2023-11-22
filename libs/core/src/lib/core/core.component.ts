import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'core-core',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './core.component.html',
	styleUrls: ['./core.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreComponent {}
