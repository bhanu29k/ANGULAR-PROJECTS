import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 
  './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
name:string;
id:string;
salary:number;
constructor()
{
  this.name="bhanu";
  this.id="72053";
  this.salary=70000;
}
Doubl()
{
  var salaryy=2*this.salary;
  return salaryy;
}

}
