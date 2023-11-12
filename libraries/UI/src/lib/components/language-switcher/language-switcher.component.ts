import { ChangeLanguageAction, SetLanguageSelectorStateAction } from './../../../../../../stores/ui/actions';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharingModule } from './../../../../../../apps/main-website/src/app/sharing/sharing.module';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { ApplicationState } from 'stores/application-state';
import { Store, select } from '@ngrx/store';
import { OverlayModule } from '@angular/cdk/overlay';
import { getLanguageSelectorState, getSelectedLanguage } from 'stores/application-state';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'lib-ui-language-switcher',
	standalone: true,
	imports: [
		CommonModule,
		OverlayModule,
		MatButtonModule,
		SharingModule
	],
	templateUrl: './language-switcher.component.html',
	styleUrls: ['./language-switcher.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
	protected languageSwitcherState$: Observable<boolean> = this.store.pipe(select(getLanguageSelectorState));
	protected languageSwitcherState = false;
	protected selectedLanguage$: Observable<string> = this.store.pipe(select(getSelectedLanguage));

	protected supportedLanguages = [
		{
			languageText: 'ui.language-switcher.en',
			languageSelector: 'en'
		},
		{
			languageText: 'ui.language-switcher.nl',
			languageSelector: 'nl'
		},
	];

	constructor(private store: Store<ApplicationState>, 
				private translateService: TranslateService) { }

	toggleLanguageSwitcher() {
		this.languageSwitcherState = !this.languageSwitcherState;
		this.store.dispatch(SetLanguageSelectorStateAction());
	}

	changeLanguage(language: string) {
		this.translateService.use(language);
		this.store.dispatch(ChangeLanguageAction({language: language}));
	}
}
