import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorizontalNavigationComponent } from './horizontal-navigation.component';

describe('HorizontalNavigationComponent', () => {
	let component: HorizontalNavigationComponent;
	let fixture: ComponentFixture<HorizontalNavigationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HorizontalNavigationComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HorizontalNavigationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
