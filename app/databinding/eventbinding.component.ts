import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'event-binding-component',
	template: `
		<button (click)="onClick()" class="btn btn-primary">Click Me</button>
	`
})
export class EventbindingComponent {
	@Output() clicked: EventEmitter<any> = new EventEmitter<any>();
	onClick() {
		//alert('It works!');
		this.clicked.emit('It worked!');
	}
}