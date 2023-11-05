import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuToggleComponent } from './menu-toggle.component';

describe('MenuToggleComponent', () => {
	let component: MenuToggleComponent;
	let fixture: ComponentFixture<MenuToggleComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MenuToggleComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(MenuToggleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
