import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationState, fromCore } from '@personal-website/core';
import { Store } from '@ngrx/store';

@Component({
	selector: 'lib-home-home',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

	constructor(private store: Store<ApplicationState>) {
		this.store.dispatch(fromCore.SetCurrentRouteStateAction({currentRoute: 'home'}));
	}
}
