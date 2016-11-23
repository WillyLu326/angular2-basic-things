import { Directive, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
	selector: '[highlight-three]'
})
export class HighlightThreeDirective implements OnInit{
	@Input() defaultColor: string = 'white';
	@Input() highlightColor: string = 'blue';
	private backgroundColor: string;

	@HostListener('mouseenter') mouseenter() {
		this.backgroundColor = this.highlightColor;
	}
	@HostListener('mouseleave') mouseleave() {
		this.backgroundColor = this.defaultColor;
	}
	@HostBinding('style.backgroundColor') get setBackgroundColor() {
		return this.backgroundColor;
	}

	ngOnInit() {
		this.backgroundColor = this.defaultColor;
	}
}