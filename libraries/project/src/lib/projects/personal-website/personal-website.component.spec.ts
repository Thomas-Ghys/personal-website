import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalWebsiteComponent } from './personal-website.component';

describe('PersonalWebsiteComponent', () => {
	let component: PersonalWebsiteComponent;
	let fixture: ComponentFixture<PersonalWebsiteComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PersonalWebsiteComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PersonalWebsiteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
