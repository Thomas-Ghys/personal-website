import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ApplicationState, selectLanguageSelectorState, selectSelectedLanguage, fromUI, selectSupportedLanguages } from '@personal-website/core';
import { UiRootModule } from './../../../ui.root.module';
import { TranslateService } from '@ngx-translate/core';
import { LanguageItem } from 'libraries/core/src/types/LanguageItemType';

@Component({
	selector: 'ui-language-switcher',
	standalone: true,
	imports: [
		CommonModule,
		OverlayModule,
		MatIconModule,
		MatButtonModule,
		UiRootModule
	],
	templateUrl: './language-switcher.component.html',
	styleUrls: ['./language-switcher.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
	protected languageSwitcherState$: Observable<boolean> = this.store.pipe(select(selectLanguageSelectorState));
	protected selectedLanguage$: Observable<string> = this.store.pipe(select(selectSelectedLanguage));
	protected supportedLanguages$: Observable<LanguageItem[]> = this.store.pipe(select(selectSupportedLanguages));
	

	constructor(private store: Store<ApplicationState>, 
				private translateService: TranslateService) { }

	toggleLanguageSwitcher() {
		this.store.dispatch(fromUI.SetLanguageSelectorStateAction());
	}

	changeLanguage(language: string) {
		this.translateService.use(language);
		this.store.dispatch(fromUI.ChangeLanguageAction({language: language}));
	}
}
