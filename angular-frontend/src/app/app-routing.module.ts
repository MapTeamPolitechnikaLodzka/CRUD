import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { CreateBuildingComponent } from './create-building/create-building.component';
import { UpdateBuildingComponent } from './update-building/update-building.component';
import { BuildingDetailsComponent } from './building-details/building-details.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: 'buildings', component: BuildingListComponent},
  {path: 'create-building', component: CreateBuildingComponent},
  // {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-building/:id', component: UpdateBuildingComponent},
  {path: 'building-details/:id', component: BuildingDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
