import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactType } from '../interfaces/contactType';
import { ContactChipComponent } from "../components/contact-chip/contact-chip.component";

@Component({
    selector: 'lib-contact-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ContactChipComponent]
})
export class ContactComponent {
	contactOptions: ContactType[] = [
		{
			contactTypeName: 'LinkedIn',
			contactIcon: 'assets/logo/linkedin_logo.svg',
			contactLink: 'https://www.linkedin.com/in/thomas-ghys-699a9b209/',
			contactType: 'url'
		},
		{
			contactTypeName: 'Github',
			contactIcon: 'assets/logo/github_logo.svg',
			contactLink: 'https://github.com/Thomas-Ghys',
			contactType: 'url'
		},
		{
			contactTypeName: 'E-mail',
			contactIcon: 'assets/logo/email_logo.svg',
			contactLink: 'thomas-ghys@outlook.com',
			contactType: 'email'
		},
		{
			contactTypeName: 'Line',
			contactIcon: 'assets/logo/line_logo.svg',
			contactLink: 'assets/pictures/lineQrCode.jpg',
			contactType: 'img'
		},
		{
			contactTypeName: 'Whatsapp',
			contactIcon: 'assets/logo/whatsapp_logo.svg',
			contactLink: '+32 484 496 411',
			contactType: 'phone'
		}
	]
}
