import { Component } from '@angular/core';

import { DataService } from './services/data.service';

@Component({
  selector: 'my-app',
  styles: [`
    
  `],
  template: `
    <property-binding-component [result]=1000></property-binding-component>
    <directives-component [value]="100"></directives-component>
    <service-one-component></service-one-component>
    <service-two-component></service-two-component>
  `,
  providers: [DataService]
})
export class AppComponent {
  message = 'This is the sample message.';
}