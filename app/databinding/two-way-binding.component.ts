import { Component } from '@angular/core';

@Component({
	selector: 'two-way-binding-component',
	template: `
		<input type="text" class="form-control" [(ngModel)]="person.name" >
		<input type="text" class="form-control" [(ngModel)]="person.name" >
	`
})
export class TwoWayBindingComponent {
	person = {
		name: 'willy',
		age: 27
	}
}