import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-receiver',
  templateUrl: './employee-receiver.component.html',
  styleUrls: ['./employee-receiver.component.css']
})
export class EmployeeReceiverComponent implements OnInit {
  @Input() employeesname:string;
  

  constructor() { }

  ngOnInit() {
  }


abbr(employeesname)
{
  
  var splitted=employeesname.split(" ");
  var len=splitted.length;
  var i=0;
  var ans="";
  for(i=0;i<len-1;i++)
  {
    ans+=(splitted[i].charAt(0))+" "; 
  }
  ans+=(splitted[i]);
  return ans;
}
}