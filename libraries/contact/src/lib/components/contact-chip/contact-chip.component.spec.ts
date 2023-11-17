import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactChipComponent } from './contact-chip.component';

describe('ContactChipComponent', () => {
	let component: ContactChipComponent;
	let fixture: ComponentFixture<ContactChipComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ContactChipComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ContactChipComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
