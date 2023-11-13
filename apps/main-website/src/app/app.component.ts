import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuBarComponent } from '@personal-website/UI';
import { Title } from '@angular/platform-browser';
import { ApplicationState } from 'stores/application-state';
import { Store } from '@ngrx/store';
import { SharingModule } from './sharing/sharing.module';
import { ChangeLanguageAction } from 'stores/ui/index';

@Component({
	standalone: true,
	imports: [
		RouterModule,
		MenuBarComponent,
		SharingModule
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
		this.store.dispatch(ChangeLanguageAction({language: 'en'}));
	}
}
