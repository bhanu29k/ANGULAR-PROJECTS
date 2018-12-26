import { Component } from '@angular/core';
import { JobApplication } from './job-application';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
jobApplications:JobApplication=new JobApplication("bhanu","deve","btech");
fname="bhanu";

//jobApplication:JobApplication;
constructor(){
 
 // this.jobApplications=new JobApplication("bhanu","deve","btech");
 // alert(this.jobApplications.name);
}
ngOnInint()
{
  //this.fname="bhanu";
 // this.jobApplication.name=this.jobApplications.name;
  /*
  this.jobApplications.name="Bhanu";
  this.jobApplications.skills="Developer";
  this.jobApplications.education="Btech";
  */
}



  
}
