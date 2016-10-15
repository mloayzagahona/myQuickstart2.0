import { CustomerService } from './customer.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    template: `
    <ul>
        <li *ngFor="let c of customers">
            <app-customer [customer]="c"></app-customer>
        </li>
    </ul>
    `
})
export class CustomersComponent implements OnInit {

    // customers: Observable<any[]>;
    // customers: Promise<any[]>;
    customers: any[];

    constructor(private _customerService: CustomerService) { }

    ngOnInit() {
        // Rx Observable
        this._customerService.getCustomersByObservables()
        .subscribe(
          (customers) => this.customers = customers,
          (err) => {console.error(err);}
        );

        // Straight up Promise to array
        // this._customerService.getCustomersByPromises()
        // .then((customers) => {
        //     this.customers = customers;
        // })
        // .catch((err) => {
        //     console.error(err);
        //     //return Observable.of("");
        // });

        // Promise<any[]>
        // this.customers = this._customerService.getCustomersByObservables()
        // .catch((err) => {
        //     console.error(err);
        //     //return Observable.of("");
        // });

        // Rx Observable
        // this.customers = this._customerService.getCustomersByPromises()
        // .catch((err) => {
        //     console.error(err);
        //     //return Observable.of("");
        // });
     }
}
