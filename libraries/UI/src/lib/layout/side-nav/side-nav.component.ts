import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavItemComponent } from '../../components/side-nav-item/side-nav-item.component';
import { UIRootModule } from 'libraries/UI/src/ui.root.module';

@Component({
  selector: 'lib-ui-side-nav',
  standalone: true,
  imports: [
	CommonModule,
	SideNavItemComponent,
	UIRootModule
],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {
	protected sideNavItemConfiguration = [
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
}
