import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import { ApproutingModule,routingComponents } from 'D://Angular5//Project//springAngular//src//app//app-routing.module';

import {CustomerService} from './customer.service';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerComponent } from './customer/customer.component';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    CustomerComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ApproutingModule,
  
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
