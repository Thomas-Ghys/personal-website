import { SharingModule } from './../../../../../../apps/main-website/src/app/sharing/sharing.module';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ApplicationState } from 'stores/application-state';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'lib-ui-side-nav-item',
  standalone: true,
  imports: [
	CommonModule, 
	MatIconModule,
	SharingModule
],
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavItemComponent {
	@Input() sideNavIcon = 'device_unknown';
	@Input() sideNavText = 'test';
	@Input() sideNavUrl = '/home';

	// protected sideNavItemActive: Observable<string> = this.store.pipe(select());

	constructor(private store: Store<ApplicationState>) { }
}
