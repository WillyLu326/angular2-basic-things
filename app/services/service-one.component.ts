import { Component } from '@angular/core';

import { LogService } from './log.service';
import { EventEmitter } from '@angular/core';

import { DataService } from './data.service';

@Component({
	selector: 'service-one-component',
	templateUrl: './app/services/service-one.component.html',
	providers: [LogService]
})
export class ServiceOneComponent{
	data: string[] = [];
	constructor(private logService: LogService, private dataService: DataService) {}

	onLog(value: string) {
		this.logService.printLog(value);
	}

	onStore(value: string) {
		this.dataService.addItem(value);
	}

	onRefresh() {
		this.data = this.dataService.getData().slice(0);
	}

	onSend(value: string) {
		this.dataService.pushData(value);
	}
}