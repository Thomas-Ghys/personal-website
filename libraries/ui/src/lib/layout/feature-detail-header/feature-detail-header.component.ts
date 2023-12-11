import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UiRootModule } from 'libraries/ui/src/ui.root.module';

@Component({
	selector: 'ui-feature-detail-header',
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		UiRootModule
	],
	templateUrl: './feature-detail-header.component.html',
	styleUrls: ['./feature-detail-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureDetailHeaderComponent {
	@Input() featureDetailHeaderText: string = '';
	@Output() closeFeatureDetailClicked: EventEmitter<void> = new EventEmitter<void>();
}
