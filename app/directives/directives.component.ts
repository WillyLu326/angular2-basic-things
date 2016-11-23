import { Component, Input } from '@angular/core';

@Component({
	selector: 'directives-component',
	templateUrl: './app/directives/directives.component.html'
})
export class DirectivesComponent {
	switch: boolean = true;
	items: number[] = [1, 2, 3, 4, 5];
	@Input() value: number = 101;
 	onSwitch() {
		this.switch = !this.switch;
	}
}