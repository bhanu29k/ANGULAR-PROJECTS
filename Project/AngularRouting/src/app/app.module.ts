import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, comp } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

@NgModule({
  declarations: [
    AppComponent,
    comp,                       
    HomeComponent,
    DepartmentDetailsComponent
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }                           