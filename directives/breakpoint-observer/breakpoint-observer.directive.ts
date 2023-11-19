import { BreakPoints } from './../interfaces/breakpoints';
import { Directive, ElementRef, OnDestroy, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subject, takeUntil } from "rxjs";

@Directive({
	selector: '[breakpointObserver]',
	standalone: true
})
export class BreakpointObserverDirective implements OnInit, OnDestroy {
	private computationalBreakpoints: string[] = [];
	private onDestroy$ = new Subject<void>();
	
	constructor(private breakpointObserver: BreakpointObserver, public element: ElementRef) {}
	
	ngOnInit(): void {
		this.breakpointObserver.observe([
			Breakpoints.XSmall,
			Breakpoints.Small,
			Breakpoints.Medium,
			Breakpoints.Large,
			Breakpoints.XLarge
		]).pipe(
			takeUntil(this.onDestroy$)
		).subscribe((state: BreakpointState) => {
			Object.entries(Breakpoints).forEach(([breakpoint, breakpointValue]: [string, string]) => {
				this.filterClasses(state, breakpoint);

				if (!breakpointValue.match(/orientation/g)) {
					this.computationalBreakpoints.push(breakpoint);
				}
			});

			this.filterComputationalClasses(state);
		});
	}

	ngOnDestroy(): void {
		this.onDestroy$.next();
		this.onDestroy$.complete();
	}	

	private filterClasses(state: BreakpointState, breakpoint: string) {
		if (state.breakpoints[Breakpoints[breakpoint as keyof typeof Breakpoints]]) {
			this.element.nativeElement.classList.add(`breakpoint-${breakpoint.toLowerCase()}`);
		} else if (!state.breakpoints[Breakpoints[breakpoint as keyof typeof Breakpoints]]) {
			this.element.nativeElement.classList.remove(`breakpoint-${breakpoint.toLowerCase()}`);
		}
  }

  private filterComputationalClasses(state: BreakpointState) {
	  this.computationalBreakpoints.forEach((breakpoint: string) => {
		  if (state.breakpoints[Breakpoints[breakpoint as keyof typeof Breakpoints]]) {
			  this.matchComputationalClasses(this.computationalBreakpoints.indexOf(breakpoint));
		  }
	  });
  }

  private matchComputationalClasses(activeBreakpoint: number) {
	  this.computationalBreakpoints.forEach((breakpoint: string) => {
		  if (activeBreakpoint > this.computationalBreakpoints.indexOf(breakpoint)) {
			  this.element.nativeElement.classList.add(`breakpoint-larger-than-${breakpoint.toLowerCase()}`);
		  } else {
			  this.element.nativeElement.classList.remove(`breakpoint-larger-than-${breakpoint.toLowerCase()}`);
		  }

		  if (activeBreakpoint < this.computationalBreakpoints.indexOf(breakpoint)) {
			  this.element.nativeElement.classList.add(`breakpoint-smaller-than-${breakpoint.toLowerCase()}`);
		  } else {
			  this.element.nativeElement.classList.remove(`breakpoint-smaller-than-${breakpoint.toLowerCase()}`);
		  }
	  });
  }
}