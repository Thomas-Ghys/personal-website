import { NavigationItem } from "../interfaces/navigationItem";

export const navigationData: NavigationItem[] = [
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
]