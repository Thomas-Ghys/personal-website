import { LanguageItem } from "../../types/LanguageItemType";
import { NavigationItem } from "../../types/NavigationItemType";

export interface UIState {
	menuState: boolean,
	languageSelectorState: boolean,
	currentLanguage: string,
	supportedNavigation: NavigationItem[],
	supportedLanguages: LanguageItem[]
}

export const INITIAL_UI_STATE: UIState = {
	menuState: false,
	languageSelectorState: false,
	currentLanguage: '',
	supportedNavigation: [
		{
			sideNavIcon: 'home',
			sideNavText: 'ui.side-nav.home',
			sideNavUrl: 'home'
		},
		{
			sideNavIcon: 'account_circle',
			sideNavText: 'ui.side-nav.about',
			sideNavUrl: 'about'
		},
		
		{
			sideNavIcon: 'bug_report',
			sideNavText: 'ui.side-nav.project',
			sideNavUrl: 'projects'
		},
		{
			sideNavIcon: 'call',
			sideNavText: 'ui.side-nav.contact',
			sideNavUrl: 'contact'
		},
	],
	supportedLanguages: [
		{
			languageText: 'ui.language-switcher.en',
			languageSelector: 'en'
		},
		{
			languageText: 'ui.language-switcher.nl',
			languageSelector: 'nl'
		},
	]
}