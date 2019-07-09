import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './employees/list-employee.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from './shared/select.required.validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confrm-equal-validator.directive';
import { EmployeeService } from './employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
const appRoutes: Routes = [{
  path: 'list', component: ListEmployeeComponent},
{
path: 'create', component: CreateEmployeeComponent
},
{path: '', redirectTo: '/list', pathMatch: 'full' } ]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,SelectRequiredValidatorDirective,ConfirmEqualValidatorDirective, DisplayEmployeeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, BsDatepickerModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
