import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavItemComponent } from '../../components/side-nav-item/side-nav-item.component';
import { UIRootModule } from 'libraries/UI/src/ui.root.module';
import { NavigationItem } from '../../interfaces/navigationItem';
import { navigationData } from '../../data/navigationData';

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
	protected sideNavItemConfiguration: NavigationItem[] = navigationData;
}
