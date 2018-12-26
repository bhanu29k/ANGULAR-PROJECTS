import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, convertToParamMap} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-department-details',
  template: `
    <p>
      You have selected id:
      {{id}}
    </p>
    <a (click)="goNext()"> GoNext </a> 
    <a (click)="goPrev()"> GoPrev </a>
    <a (click)="onBack()">Go Back</a>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
  id:number;
  constructor(private route:ActivatedRoute,private route1:Router) { }

  ngOnInit() {
     this.id=parseInt(this.route.snapshot.paramMap.get('id'));
    // this.route.paramMap.subscribe(params:ParamMap)=>
    
    
  }
  goPrev()
  {
    let prevId=this.id-1;
    this.route1.navigate(['/department',prevId]);
    this.id=prevId;
  }
  goNext()
  {
    let nextId=this.id+1;
    this.route1.navigate(['/department',nextId]);
    this.id=nextId;
  }
  onBack()
  {
    let selId=this.id ? this.id : null;
    this.route1.navigate(["/department",{id:selId}]);
  }

}
