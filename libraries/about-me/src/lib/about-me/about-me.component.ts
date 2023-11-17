import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'lib-about-me',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './about-me.component.html',
	styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {}
