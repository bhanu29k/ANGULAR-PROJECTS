import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,ParamMap} from  '@angular/router';
@Component({
  selector: 'app-department',
  template: `
   <h3>Department Details</h3>
   <ul class="items" *ngFor="let dept of departments">
   <li (click)="onSelect(dept)" [class.selected]="isselected(dept)"  > <span class="badge">{{dept.id}} </span> {{dept.name}} </li>
   </ul> 
  `,
  styles: []
})
export class DepartmentComponent implements OnInit {
  public selId;
  departments=[
  {"id":1,"name":"Angular"},
  {"id":2,"name":"Scala"},
  {"id":3,"name":"java"},
  {"id":4,"name":"Python"}
  ]
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id2=parseInt(params.get("id"));
      this.selId=id2;  
    });
  }
  onSelect(department)
  {
    this.router.navigate(['/department',department.id]);
  }
  isselected(dId)
  {
    return dId.id===this.selId;
  }
}
