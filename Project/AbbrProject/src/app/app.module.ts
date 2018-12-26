import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeSenderComponent } from './employee-sender/employee-sender.component';
import { EmployeeReceiverComponent } from './employee-receiver/employee-receiver.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSenderComponent,
    EmployeeReceiverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
