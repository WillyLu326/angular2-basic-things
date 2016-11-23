"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var log_service_1 = require('./log.service');
var data_service_1 = require('./data.service');
var ServiceOneComponent = (function () {
    function ServiceOneComponent(logService, dataService) {
        this.logService = logService;
        this.dataService = dataService;
        this.data = [];
    }
    ServiceOneComponent.prototype.onLog = function (value) {
        this.logService.printLog(value);
    };
    ServiceOneComponent.prototype.onStore = function (value) {
        this.dataService.addItem(value);
    };
    ServiceOneComponent.prototype.onRefresh = function () {
        this.data = this.dataService.getData().slice(0);
    };
    ServiceOneComponent.prototype.onSend = function (value) {
        this.dataService.pushData(value);
    };
    ServiceOneComponent = __decorate([
        core_1.Component({
            selector: 'service-one-component',
            templateUrl: './app/services/service-one.component.html',
            providers: [log_service_1.LogService]
        }), 
        __metadata('design:paramtypes', [log_service_1.LogService, data_service_1.DataService])
    ], ServiceOneComponent);
    return ServiceOneComponent;
}());
exports.ServiceOneComponent = ServiceOneComponent;
//# sourceMappingURL=service-one.component.js.map