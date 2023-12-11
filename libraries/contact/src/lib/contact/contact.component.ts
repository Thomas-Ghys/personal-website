import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactType, fromCore } from '@personal-website/core';
import { ContactCardComponent } from '../components/contact-card/contact-card.component';
import { ContactRootModule } from '../../contact.root.module';
import { Store, select } from '@ngrx/store';
import { ApplicationState, BreakpointObserverDirective, selectContactOptions } from '@personal-website/core';
import { Observable } from 'rxjs';

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
export class ContactComponent {
	contactOptions$: Observable<ContactType[]> = this.store.pipe(select(selectContactOptions));

	constructor(private store: Store<ApplicationState>) {
		this.store.dispatch(fromCore.SetCurrentRouteStateAction({currentRoute: 'contact'}));
	}
}
