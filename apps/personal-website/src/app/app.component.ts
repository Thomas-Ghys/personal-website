import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuBarComponent } from '@personal-website/ui';

@Component({
	standalone: true,
	imports: [
		RouterModule,
		MenuBarComponent
	],
	selector: 'personal-website-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'personal-website';
}
