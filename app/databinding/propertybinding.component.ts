import { Component, Input } from '@angular/core';

@Component({
	selector: 'property-binding-component',
	styleUrls: ['./app/databinding/propertybinding.component.css'],
	templateUrl: './app/databinding/propertybinding.component.html'
})
export class PropertybindingComponent {
	color: string = 'yellow';
	@Input() result: number = 0;

	bindClick(value: any) {
		alert(value);
	}
}