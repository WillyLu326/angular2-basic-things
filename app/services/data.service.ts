import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class DataService {
	pushedData: EventEmitter<string> = new EventEmitter<string>();

	data: string[] = [];

	constructor(private logService: LogService) {}

	addItem(item: string) {
		this.logService.printLog(item);
		this.data.push(item);
	}

	getData() {
		return this.data;
	}

	pushData(value: string) {
		this.pushedData.emit(value);
	}
}