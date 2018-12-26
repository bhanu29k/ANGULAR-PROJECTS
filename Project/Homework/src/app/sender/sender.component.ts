import { Component, OnInit, Input } from '@angular/core'; 
import {Employee} from 'D:/Angular5/Project/Homework/src/app/employee';
@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
@Input() EmployeeRec=Employee;
  constructor() { 
  }

  ngOnInit() {
  }
  MyFunc()
  {
    if(this.EmployeeRec.name>20000)
    {

    }
  }

}

