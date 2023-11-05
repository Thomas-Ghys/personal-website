import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuBarComponent } from '@personal-website/UI';

@Component({
	standalone: true,
	imports: [
		RouterModule,
		MenuBarComponent,
	],
	selector: 'personal-website-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'main-website';
}
