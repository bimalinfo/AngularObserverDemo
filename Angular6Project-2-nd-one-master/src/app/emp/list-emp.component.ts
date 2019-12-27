import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpService } from './emp.service';
import { Emp } from "./emp";

//import { Emp } from './emp';
@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {
allemployee: any;
  empForm: FormGroup;
  orders = [
    { id: 100, name: 'order 1' },
    { id: 200, name: 'order 2' },
    { id: 300, name: 'order 3' },
    { id: 400, name: 'order 4' }
  ];

  //constructor(private router: Router,public empService: EmpService) { }

  constructor(private formBuilder: FormBuilder,private router: Router,public empService: EmpService) {
  }

  ngOnInit() {
  	console.log('list-emp:ngOnInit');
  	this.empService.getEmployees()
      .subscribe( data => {
        this.allemployee = data;
        console.log('Employee get:OnSubmit '+this.allemployee);
     });
  }

  submit():void{
  }
  deleteEmployee(emp: Emp):void{
  	alert('emp: '+emp.name);
  }

  editEmployee(emp: Emp):void{
  	alert('emp: '+emp.name);

  	//Store Emp object
  	localStorage.setItem("emp",JSON.stringify(emp));
  	this.router.navigate(['edit']);
  }
}
