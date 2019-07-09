import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
employees:Employee[];
employeeToDisplay:Employee;
private arrIndex:1;

  constructor(private employeeService:EmployeeService) {
  }

  ngOnInit() {
   this.employees =   this.employeeService.getEmployees();
   this.employeeToDisplay = this.employees[0];
  }
  NextEmployees():void{
    if (this.arrIndex<=2) {
      this.employeeToDisplay = this.employees[this.arrIndex++];
    } else{
      this.employeeToDisplay = this.employees[0];
      this.arrIndex = 1;
    }

  }

}
