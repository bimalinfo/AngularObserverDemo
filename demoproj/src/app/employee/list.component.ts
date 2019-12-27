import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from "./employee";
import {MessagecommunicationserviceService} from '../messagecommnication/messagecommunicationservice.service'
import { Observable } from 'rxjs/Observable';
import { map, switchMap, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

//import { Emp } from './emp';
@Component({
  selector: 'app-list-emp',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
allemployee: any;
  empForm: FormGroup;
  messages: any[] = [];
  subscription: Subscription;
  orders = [
    { id: 100, name: 'order 1' },
    { id: 200, name: 'order 2' },
    { id: 300, name: 'order 3' },
    { id: 400, name: 'order 4' }
  ];

  //constructor(private router: Router,public empService: EmpService) { }

  constructor(private formBuilder: FormBuilder,private router: Router,public empService: EmployeeService,private messagecommunicationService: MessagecommunicationserviceService) {
    alert('Constructor in list.component');
    this.subscription = this.messagecommunicationService.getMessage().subscribe(message => {
      if (message) {
        alert('Message recieved from List Componemt--->>>>>>>>>>>>>>>'+JSON.stringify(message));
        console.log("--------->Message recieved from List Componemt--->>>>>>>>>>>>>>>"+message);
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });

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
  deleteEmployee(emp: Employee):void{
  	alert('emp: '+emp.name);
  }

  editEmployee(emp: Employee):void{
  	alert('emp: '+emp.name);

  	//Store Emp object
  	localStorage.setItem("emp",JSON.stringify(emp));
  	this.router.navigate(['edit']);
  }
}
