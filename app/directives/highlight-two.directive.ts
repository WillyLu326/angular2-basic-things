import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
	selector: '[highlight-two]'
})
export class HighlightTwoDirective {
	constructor(private elementRef: ElementRef, private renderer: Renderer) {
		renderer.setElementStyle(elementRef.nativeElement, 'backgroundColor', 'red');	
	}
}