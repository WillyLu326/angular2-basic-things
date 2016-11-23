import { Component, OnInit } from '@angular/core';

import { LogService } from './log.service';
import { DataService } from './data.service';
 
@Component({
	selector: 'service-two-component',
	templateUrl: './app/services/service-two.component.html',
	providers: [LogService]
})
export class ServiceTwoComponent implements OnInit {
	value: string;
	data: string[] = [];
	constructor(private logService: LogService, private dataService: DataService) {}

	onLog(value: string) {
		this.logService.printLog(value);
	}

	onStore(value: string) {
		this.dataService.addItem(value);
	}

	ngOnInit() {
		this.data = this.dataService.getData();
		this.dataService.pushedData.subscribe(data => this.value = data);
	}
}