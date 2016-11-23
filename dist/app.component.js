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
var data_service_1 = require('./services/data.service');
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'This is the sample message.';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: ["\n    \n  "],
            template: "\n    <!-- <property-binding-component [result]=1000></property-binding-component> -->\n    <!-- <directives-component [value]=\"100\"></directives-component> -->\n    <service-one-component></service-one-component>\n    <service-two-component></service-two-component>\n  ",
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map