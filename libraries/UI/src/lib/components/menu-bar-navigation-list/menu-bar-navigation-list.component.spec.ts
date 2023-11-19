import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuBarNavigationListComponent } from './menu-bar-navigation-list.component';

describe('MenuBarNavigationListComponent', () => {
	let component: MenuBarNavigationListComponent;
	let fixture: ComponentFixture<MenuBarNavigationListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MenuBarNavigationListComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(MenuBarNavigationListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
