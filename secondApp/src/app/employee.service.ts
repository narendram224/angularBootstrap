import { Injectable } from '@angular/core';
import { Employee } from './model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private ListEmployees: Employee[]=[
    {
    id:1,
  name:'mark',
  gender:'Male',
  contactPreferance:'Email',
  email:'market@gmsil.com',
  dateofBirth:new Date('10/25/1996'),
    department: '1',
    isActive:true,
    photoPath:'assets/images/mark.jpg',



}, {
id:2,
name:'jone',
gender:'Male',
contactPreferance:'Email',
email:'jone@gmsil.com',
dateofBirth:new Date('05/27/1966'),
department: '2',
isActive:true,
photoPath:'assets/images/jone.jpg',



}, {
id:3,
name:'mary',
gender:'Female',
contactPreferance:'Email',
email:'mary@gmsil.com',
dateofBirth:new Date('11/2/1986'),
department: '3',
isActive:true,
photoPath:'assets/images/mary.jpg',


}
];

getEmployees():Employee[]{
  return this.ListEmployees;
}

save(employee:Employee){
  this.ListEmployees.push(employee);

}
  constructor() { }
}
