import { CustomerService } from './customer.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-customer',
    templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit {

    constructor(private _customerService: CustomerService) { }

    @Input() customer: {id:number, name:string};

    myColour =  'green';

    ngOnInit() { }
}