import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ApplicationState } from '@personal-website/core';

@Component({
	selector: 'lib-project-personal-website',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './personal-website.component.html',
	styleUrls: ['./personal-website.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalWebsiteComponent {
	constructor(private store: Store<ApplicationState>) { }
}
