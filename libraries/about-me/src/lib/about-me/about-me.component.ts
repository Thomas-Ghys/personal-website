import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ApplicationState, fromCore } from '@personal-website/core';

@Component({
	selector: 'personal-website-about-me',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './about-me.component.html',
	styleUrls: ['./about-me.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {
	constructor(private store: Store<ApplicationState>) {
		this.store.dispatch(fromCore.SetCurrentRouteStateAction({currentRoute: 'about'}));		
	}
}
