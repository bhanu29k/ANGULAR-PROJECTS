import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-sender',
  templateUrl: './employee-sender.component.html',
  styleUrls: ['./employee-sender.component.css']
})
export class EmployeeSenderComponent implements OnInit {
  employeename:string[];

  constructor() {
    this.employeename=['Bhanu Khandelwal','Govind Rawat','Bhuvan Chand','Rakesh Sharma','Rakhi yadav'];
   }

  ngOnInit() {
  }

}
