import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavPanelComponent } from './sidenav-panel.component';

describe('SidenavPanelComponent', () => {
	let component: SidenavPanelComponent;
	let fixture: ComponentFixture<SidenavPanelComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SidenavPanelComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SidenavPanelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
