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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var propertybinding_component_1 = require('./databinding/propertybinding.component');
var eventbinding_component_1 = require('./databinding/eventbinding.component');
var two_way_binding_component_1 = require('./databinding/two-way-binding.component');
var directives_component_1 = require('./directives/directives.component');
var service_one_component_1 = require('./services/service-one.component');
var service_two_component_1 = require('./services/service-two.component');
var highlight_one_directive_1 = require('./directives/highlight-one.directive');
var highlight_two_directive_1 = require('./directives/highlight-two.directive');
var highlight_three_directive_1 = require('./directives/highlight-three.directive');
var log_service_1 = require('./services/log.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                propertybinding_component_1.PropertybindingComponent,
                eventbinding_component_1.EventbindingComponent,
                two_way_binding_component_1.TwoWayBindingComponent,
                directives_component_1.DirectivesComponent,
                service_one_component_1.ServiceOneComponent,
                service_two_component_1.ServiceTwoComponent,
                highlight_one_directive_1.HighlightOneDirective,
                highlight_two_directive_1.HighlightTwoDirective,
                highlight_three_directive_1.HighlightThreeDirective
            ],
            providers: [log_service_1.LogService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map