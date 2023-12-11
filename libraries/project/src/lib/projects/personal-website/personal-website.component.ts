import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ApplicationState, fromCore } from '@personal-website/core';
import { FeatureDetailHeaderComponent } from '@personal-website/ui';

@Component({
	selector: 'lib-project-personal-website',
	standalone: true,
	imports: [
		CommonModule,
		FeatureDetailHeaderComponent
	],
	templateUrl: './personal-website.component.html',
	styleUrls: ['./personal-website.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalWebsiteComponent {
	

	constructor(private store: Store<ApplicationState>) { 
		this.store.dispatch(fromCore.SetCurrentRouteStateAction({currentRoute: 'projects/personal-website'}));
	}

	closeProject() {
		this.store.dispatch(fromCore.NavigateToRouteAction({routeToNavigateTo: 'projects'}));
	}
}
