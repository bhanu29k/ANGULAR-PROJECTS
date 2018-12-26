import { Component } from '@angular/core';
import {Employee} from 'D:/Angular5/Project/Homework/src/app/employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  EmployeeObj:Employee[];
  constructor()
  {
   this.EmployeeObj=[
     new Employee("Bhanu","72053",25000),
     new Employee("Ishanya","72054",35000),
     new Employee("Neeraj","72055",15000),
     new Employee("Vibhanshu","72056",18000),
     new Employee("Varun","72057",9000),
     new Employee("Rakhi","72058",9999),
   ]
  }
}
