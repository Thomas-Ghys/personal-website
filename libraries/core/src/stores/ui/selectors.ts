import { LanguageItem } from "../../types/LanguageItemType";
import { NavigationItem } from "../../types/NavigationItemType";
import { UIState } from "./ui-state";

export const getMenuState = (uiState: UIState): boolean => uiState.menuState;
export const getLanguageSelectorState = (uiState: UIState): boolean => uiState.languageSelectorState;
export const getCurrentSelectedLanguage = (uiState: UIState): string => uiState.currentLanguage;
export const getSupportedNavigationItems = (uiState: UIState): NavigationItem[] => uiState.supportedNavigation;
export const getSupportedLanguages = (uiState: UIState): LanguageItem[] => uiState.supportedLanguages;