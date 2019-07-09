import { Component, OnInit, Input ,OnChanges,SimpleChanges} from '@angular/core';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit,OnChanges {
  @input employeeId:number;
  private _item:Employee;

  @Input()
  set item(val:Employee){

console.log('privious:'+ (this._item?this._item.name :'NULL'));
console.log('curren:'+ val.name);
this._item = val;
  }
  get item():Employee{
    return this._item;
  }



  // @Input() item: Employee;
  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges(changes:SimpleChanges){
  //   console.log(changes);
  //   const priviousEmployee = <Employee>changes.item.previousValue;
  //   const currentEmployee=<Employee>changes.item.currentValue;
  //   console.log('priviousEmployee:'+(priviousEmployee?priviousEmployee.name :'NULL'));
  //   console.log('currecntEmployee:'+currentEmployee.name );

  // }
// the commetn sec is use to find the any change of data to the parent to child component

ngOnChanges(changes:SimpleChanges){
for(const propName of Object.keys(changes)){
  console.log(propName);
}
}

}
