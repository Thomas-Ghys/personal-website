import { ContactType } from './../../interfaces/contactType';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationState } from 'stores/application-state';
import { Store } from '@ngrx/store';
import { OpenBlankTargetAction } from 'stores/core/index';

@Component({
	selector: 'lib-contact-contact-chip',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './contact-chip.component.html',
	styleUrls: ['./contact-chip.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactChipComponent {
	@Input() chipData: ContactType = {
		contactIcon: '',
		contactLink: '',
		contactTypeName: '',
		contactType: 'url'
	};

	constructor(private store: Store<ApplicationState>) {}

	routeToLink() {
		this.store.dispatch(OpenBlankTargetAction({route: this.chipData.contactLink}));
	}
}
