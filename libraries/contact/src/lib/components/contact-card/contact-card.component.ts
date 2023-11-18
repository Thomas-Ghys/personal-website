import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';
import { ContactType } from './../../interfaces/contactType';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationState } from 'stores/application-state';
import { Store } from '@ngrx/store';
import { OpenBlankTargetAction } from 'stores/core/index';
import { SharingModule } from './../../../../../../apps/main-website/src/app/sharing/sharing.module';

@Component({
	selector: 'lib-contact-contact-card',
	standalone: true,
	imports: [
		CommonModule,
		OverlayModule,
		MatIconModule,
		MatButtonModule,
		SharingModule
	],
	templateUrl: './contact-card.component.html',
	styleUrls: ['./contact-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactCardComponent {
	@Input() contactCardData: ContactType = {
		contactIcon: '',
		contactLink: '',
		contactTypeName: '',
		contactType: 'url'
	};

	protected fullscreenQrCodeIsOpen = false;
	protected fullscreenQRCode!: CdkOverlayOrigin;

	constructor(private store: Store<ApplicationState>) { }

	routeToLink() {
		if (this.contactCardData.contactType !== 'url') {
			return;
		}

		this.store.dispatch(OpenBlankTargetAction({route: this.contactCardData.contactLink}));
	}

	toggleOverlay(trigger: CdkOverlayOrigin) {
		this.fullscreenQRCode = trigger;
		this.fullscreenQrCodeIsOpen = !this.fullscreenQrCodeIsOpen;
	}

	closeOverlay() {
		this.fullscreenQrCodeIsOpen = !this.fullscreenQrCodeIsOpen;
	}
}
