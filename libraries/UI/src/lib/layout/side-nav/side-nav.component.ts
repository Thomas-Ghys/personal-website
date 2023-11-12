import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavItemComponent } from '../../components/side-nav-item/side-nav-item.component';

@Component({
  selector: 'lib-ui-side-nav',
  standalone: true,
  imports: [
	CommonModule,
	SideNavItemComponent
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
			sideNavIcon: 'call',
			sideNavText: 'ui.side-nav.contact',
			sideNavUrl: 'contact'
		},
	]
}
