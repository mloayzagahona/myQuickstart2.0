import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { CustomersComponent } from './customer/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomersComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
