import {
	ChangeDetectorRef,
	Directive, EmbeddedViewRef,
	Input,
	OnDestroy,
	OnInit,
	TemplateRef,
	ViewContainerRef,
	ɵstringify as stringify
} from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map, takeUntil } from 'rxjs/operators';
import { BreakPoints } from '../../interfaces/breakpoints';

@Directive({
	selector: '[coreIfBreakpointMatches]',
	standalone: true
})
export class BreakpointMatcherDirective implements OnInit, OnDestroy {
	private thenTemplateRef: TemplateRef<unknown> | null = null;
	private elseTemplateRef: TemplateRef<unknown> | null = null;
	private thenViewRef: EmbeddedViewRef<unknown> | null = null;
	private elseViewRef: EmbeddedViewRef<unknown> | null = null;
	private onDestroy$: Subject<void> = new Subject<void>();
	private selectedBreakPoints$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

	@Input()
	set coreIfBreakpointMatches(breakPoints: BreakPoints[]) {
		const convertedBreakPoints: string[] = breakPoints.map((breakpoint: BreakPoints) => Breakpoints[breakpoint]);
		this.selectedBreakPoints$.next(convertedBreakPoints);
	}

	@Input()
	set coreIfBreakpointMatchesElse(templateRef: TemplateRef<unknown> | null) {
		this.assertTemplate('coreIfBreakpointMatchesElse', templateRef);
		this.elseTemplateRef = templateRef;
		this.elseViewRef = null;
	}

	constructor(
		private breakpointObserver: BreakpointObserver,
		private viewContainer: ViewContainerRef,
		private changeDetector: ChangeDetectorRef,
		templateRef: TemplateRef<unknown>
	) {
		this.thenTemplateRef = templateRef;
	}

	ngOnDestroy(): void {
		this.onDestroy$.next();
		this.onDestroy$.complete();
	}

	ngOnInit(): void {
		combineLatest([this.selectedBreakPoints$, this.breakpointObserver.observe([
			Breakpoints.XSmall,
			Breakpoints.Small,
			Breakpoints.Medium,
			Breakpoints.Large,
			Breakpoints.XLarge
		])]).pipe(
			takeUntil(this.onDestroy$),
			map(([selectedBreakPoints, breakPointState]: [string[], BreakpointState]) => {
				const matchedBreakpointKeys: string[] = this.getMatchedBreakPointKeys(breakPointState);
				const filteredBreakPoints: string[] = selectedBreakPoints.filter((matchBreakpoint: string) => {
					return matchedBreakpointKeys.includes(matchBreakpoint);
				});

				return filteredBreakPoints.length !== 0;
			})
		).subscribe((hasBreakPointMatches: boolean): void => {
			this.updateView(hasBreakPointMatches);
		});
	}

	private updateView(hasBreakPointMatches: boolean): void {
		if (hasBreakPointMatches === true) {
			this.setIfReference();
			this.changeDetector.markForCheck();
			return;
		}

		this.setElseReference();
		this.changeDetector.markForCheck();
	}

	private setIfReference(): void {
		if (this.thenViewRef) {
			return;
		}

		this.elseViewRef = null;
		
		if (this.thenTemplateRef) {
			this.viewContainer.clear();
			this.thenViewRef = this.viewContainer.createEmbeddedView(this.thenTemplateRef);
		}
	}

	private setElseReference(): void {
		if (this.elseViewRef) {
			return;
		}

		this.viewContainer.clear();
		this.thenViewRef = null;

		if (this.elseTemplateRef) {
			this.elseViewRef =
				this.viewContainer.createEmbeddedView(this.elseTemplateRef);
		}
	}

	private getMatchedBreakPointKeys(breakPointState: BreakpointState): string[] {
		const breakpointKeys: string[] = [];
		Object.entries(breakPointState.breakpoints).forEach(([key, value]: [string, boolean]) => {
			if (value == false) {
				return;
			}

			breakpointKeys.push(key);
		});

		return breakpointKeys;
	}

	private assertTemplate(property: string, templateRef: TemplateRef<unknown> | null): void {
		const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);

		if (!isTemplateRefOrNull) {
			throw new Error(`${property} must be a TemplateRef, but received '${stringify(templateRef)}'.`);
		}
	}
}