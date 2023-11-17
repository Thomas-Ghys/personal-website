import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'lib-contact-contact-chip',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './contact-chip.component.html',
	styleUrls: ['./contact-chip.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactChipComponent {}
