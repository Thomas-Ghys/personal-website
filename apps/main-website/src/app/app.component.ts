import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { SharingModule } from './sharing/sharing.module';
import { MenuBarComponent } from '@personal-website/ui';
import { ApplicationState, fromUI } from '@personal-website/core';

@Component({
	standalone: true,
	imports: [
		RouterModule,
		SharingModule,
		MenuBarComponent
	],
	selector: 'personal-website-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'main-website';

	constructor(private titleService: Title, 
				private store: Store<ApplicationState>, 
				private translateService: TranslateService) {
		this.titleService.setTitle(`${this.title}`);

		translateService.setDefaultLang('en');
		translateService.use('en');
		this.store.dispatch(fromUI.ChangeLanguageAction({language: 'en'}));
	}
}
