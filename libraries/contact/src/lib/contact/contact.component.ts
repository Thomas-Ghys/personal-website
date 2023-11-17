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
			contactIcon: 'LinkedIn',
			contactLink: 'www.linkedin.com/in/thomas-ghys-699a9b209'
		},
		{
			contactTypeName: 'Github',
			contactIcon: 'Github',
			contactLink: 'https://github.com/Thomas-Ghys'
		},
		{
			contactTypeName: 'E-mail',
			contactIcon: 'Email',
			contactLink: 'thomas-ghys@outlook.com'
		}
	]
}
