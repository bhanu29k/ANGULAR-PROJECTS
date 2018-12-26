 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { DefaultComponent } from './default/default.component';
import { HomeComponent } from './home/home.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
                                                                         
const routes: Routes = [
  {path:"department/:id",component:DepartmentDetailsComponent},
  {path:"", component:HomeComponent},
  {path:"department", component:DepartmentComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"**",component:DefaultComponent}
  
];                                 
                                      
@NgModule({                             
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]   
})                              
export class AppRoutingModule { }
                                      
export const comp=[DepartmentComponent,EmployeeComponent,DefaultComponent,DepartmentDetailsComponent];