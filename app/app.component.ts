import { CustomerService } from './customer/customer.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [ CustomerService ]
})
export class AppComponent {
    title = 'My First Angular 2 App';
    wardsColor = 'green';
    name = 'Manuel';

    changeSuiteColor(){
        this.wardsColor =  this.wardsColor === 'green' ? 'red' : 'green';
    }
 }
