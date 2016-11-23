import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[highlight-one]'
})
export class HighlightOneDirective {
	constructor(private elementRef: ElementRef) {
		this.elementRef.nativeElement.style.backgroundColor = 'green';
	}
}