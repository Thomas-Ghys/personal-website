import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureDetailHeaderComponent } from './feature-detail-header.component';

describe('FeatureDetailHeaderComponent', () => {
	let component: FeatureDetailHeaderComponent;
	let fixture: ComponentFixture<FeatureDetailHeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FeatureDetailHeaderComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(FeatureDetailHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
