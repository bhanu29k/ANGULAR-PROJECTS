import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { Customer } from 'D://Angular5//Project//springAngular//src//app//Customer';
import { AddCustomerComponent } from 'D://Angular5//Project//springAngular//src//app//add-customer//add-customer.component';
import { CustomerComponent } from 'D://Angular5//Project//springAngular//src//app//customer//customer.component';

const routes:Routes=[

  {path:'customer',component:CustomerComponent},
  {path:'add',component:AddCustomerComponent}
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: 
  [
    RouterModule
  ]
})
export class ApproutingModule { }
export const routingComponents = [CustomerComponent, AddCustomerComponent];