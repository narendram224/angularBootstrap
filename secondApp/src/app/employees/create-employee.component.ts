import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Employee} from '../model/employee.model';
import {DatepickerConfig, BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { Department } from '../model/department.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
    // gender = 'Male';
    // isActive = true;
    // department = '3';
dep: Department[] = [
  {id: 1, name: 'help desk'},
  {id: 2, name: 'it'},
  {id: 3, name: 'HR'},
  {id: 4, name: 'parot'}
];
employee:  Employee = {
  id: null,
  name: null,
  gender : null,
  contactPreferance : null,
  phoneNumber : null,
  email : '',
  dateofBirth : null,
  department : '-1',
  isActive : null,
  photoPath : null

}
previewPhoto = false;
mytext: string = 'show Photo';
dateofBirth: Date =  new Date(2018 , 0, 30);
datepickerconfig: Partial<BsDatepickerConfig>;

  constructor(private employeeServie:EmployeeService,private router:Router) {
    this.datepickerconfig = Object.assign({},
      {containerClass : 'theme-dark-blue',
      showWeekNumbers: false,
        minDate: new Date(2018, 0 , 1),
        maxDate: new Date(2018, 11, 31),
        dateInputFormat: 'DD/MM/YYYY'
    }
    );
   }

  ngOnInit() {
  }


  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
    this.employeeServie.save(this.employee);
    this.router.navigate(['/list']);

  }
  showPhoto(){
    this.previewPhoto = !this.previewPhoto;
    // if(this.previewPhoto){
    //   this.mytext= 'Hide Photo';
    // }
    // else{
    //   this.mytext = 'show photo';
    // }
  }
  formSubmit(form:Employee):void{




  }

}
