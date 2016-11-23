import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertybindingComponent } from './databinding/propertybinding.component';
import { EventbindingComponent } from './databinding/eventbinding.component';
import { TwoWayBindingComponent } from './databinding/two-way-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ServiceOneComponent } from './services/service-one.component';
import { ServiceTwoComponent } from './services/service-two.component';

import { HighlightOneDirective } from './directives/highlight-one.directive';
import { HighlightTwoDirective } from './directives/highlight-two.directive';
import { HighlightThreeDirective } from './directives/highlight-three.directive';

import { LogService } from './services/log.service';

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule
  ],
  declarations: [ 
  	AppComponent,
  	PropertybindingComponent,
  	EventbindingComponent,
  	TwoWayBindingComponent,
    DirectivesComponent,
    ServiceOneComponent,
    ServiceTwoComponent,
    HighlightOneDirective,
    HighlightTwoDirective,
    HighlightThreeDirective
  ],
  providers: [LogService],
  bootstrap: [ AppComponent ]
})
export class AppModule {}