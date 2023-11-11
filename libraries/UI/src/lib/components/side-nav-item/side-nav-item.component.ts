import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-ui-side-nav-item',
  standalone: true,
  imports: [
	CommonModule, 
	MatIconModule
],
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavItemComponent {
	@Input() sideNavIcon = '';
	@Input() sideNavText = '';
}
