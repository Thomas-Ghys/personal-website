import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'ui-theme-switcher',
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule
	],
	templateUrl: './theme-switcher.component.html',
	styleUrls: ['./theme-switcher.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent implements OnInit {
	protected userTheme: 'light' | 'dark' = 'light';
	private rootApplication: HTMLElement = document.getElementsByTagName("html")[0];

	ngOnInit(): void {
		if (this.rootApplication.hasAttribute("data-theme")) {
			if (this.rootApplication.getAttribute("data-theme") === 'dark-theme') {
				this.userTheme = 'dark';
				return;
			}
			this.userTheme = 'light';
			return;
		}
	}

	setDataTheme(newTheme: 'light' | 'dark') {
		this.rootApplication.setAttribute("data-theme", newTheme);
		this.userTheme = newTheme;
	}
}
