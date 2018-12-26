import { Component } from '@angular/core';
import { Employeedetails } from './employeedetails';
import * as sha256 from 'crypto-js';
var encrypt=require("crypto-js/sha256");
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temp=1;
  employeedetail:Employeedetails[];
constructor()
{
//localStorage.removeItem("userData");
}

updateStatus(){
  if(this.temp==0){
    this.temp=1;
  }
  else{
    this.temp = 0;
  }
}
signUp(ename,eid,pno,pword)
{
  let userName=ename.value;
  let userEmail=eid.value;
  let userPhone=pno.value;
  let userPassword=encrypt(pword.value).toString();
  var obj={
    name:userName,
    email:userEmail,
    phone:userPhone,
    password:userPassword
  };
  
  var flag=0;
  if(localStorage.getItem("userData")){
    let data=JSON.parse(localStorage.getItem("userData"));
    
    for(var i=0;i<data.length;i++)
    { 
      if(data[i].email.localeCompare(obj.email)==0){
        flag = 1;
        break;
    }
    }
    if(flag==0)
    {
      data.push(obj);
      localStorage.setItem("userData",JSON.stringify(data));
      alert("User Registration Successful.1");

      this.updateStatus();
      //location.reload();
    }
    else{
      alert("Duplicate Email Address");
    } 
  }
    else {
    var ob=[
    ];
    ob.push(obj);
    localStorage.setItem("userData",JSON.stringify(ob));
    alert("User Registration Successful.2");
    this.updateStatus();
    //location.reload();
    }
  //location.reload();
}  

login(ename,pword)
{
  var mename = ename.value;
  var  mpword = pword.value;
  var pw=encrypt(mpword).toString();
  mpword=pw;
  var flag1=0;
  var user=JSON.parse(localStorage.getItem("userData"));
  //alert(user.length);
 for(var i=0;i<user.length;i++)
 {
  if(user[i].email.localeCompare(mename)==0 && 
  user[i].password.localeCompare(mpword)==0){
    alert("Hi Welcome - " +user[i].name);
    flag1 = 1;
  }
 }
 if(flag1==0)
 {
   alert("User needs to signup first");
 }
}
}
