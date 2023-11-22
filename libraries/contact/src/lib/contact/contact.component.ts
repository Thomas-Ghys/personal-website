import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactType } from '../interfaces/contactType';
import { ContactCardComponent } from '../components/contact-card/contact-card.component';
import { ContactRootModule } from '../../contact.root.module';
import { Store } from '@ngrx/store';
import { ApplicationState, BreakpointObserverDirective, fromCore } from '@personal-website/core';

@Component({
    selector: 'lib-contact-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
		CommonModule,
		ContactCardComponent,
		ContactRootModule,
		BreakpointObserverDirective
	]
})
export class ContactComponent implements OnInit {
	contactOptions: ContactType[] = [
		{
			contactTypeName: 'contact.contact-card.title.linkedin',
			contactIcon: 'assets/logo/linkedin_logo.svg',
			contactLink: 'https://www.linkedin.com/in/thomas-ghys-699a9b209/',
			contactType: 'url'
		},
		{
			contactTypeName: 'contact.contact-card.title.github',
			contactIcon: 'assets/logo/github_logo.svg',
			contactLink: 'https://github.com/Thomas-Ghys',
			contactType: 'url'
		},
		{
			contactTypeName: 'contact.contact-card.title.email',
			contactIcon: 'assets/logo/email_logo.svg',
			contactLink: 'thomas-ghys@outlook.com',
			contactType: 'email'
		},
		{
			contactTypeName: 'contact.contact-card.title.line',
			contactIcon: 'assets/logo/line_logo.svg',
			contactLink: 'assets/pictures/lineQrCode.jpg',
			contactType: 'img',
			contactID: 'kacha1660'
		},
		{
			contactTypeName: 'contact.contact-card.title.whatsapp',
			contactIcon: 'assets/logo/whatsapp_logo.svg',
			contactLink: '+32 484 496 411',
			contactType: 'phone'
		}
	];

	constructor(private store: Store<ApplicationState>) {}

	ngOnInit(): void {
		this.store.dispatch(fromCore.SetCurrentRouteStateAction({currentRoute: 'contact'}));
	}
}
