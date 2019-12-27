import { Component, OnInit } from '@angular/core';
import { FormsModule, AbstractControl, FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpService } from './emp.service';
import { Emp } from './emp';
import { phoneNumberValidator } from "../validator/form-validator";
import { ageRangeValidator } from "../validator/form-validator";
import {emailValidator} from "../validator/form-validator";
@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {
empForm: FormGroup;
empdata: any;
employee: any;
allemployee: any;

countries = ['USA', 'Canada', 'Uk', 'India'];
  constructor(private formBuilder: FormBuilder,private router: Router,public empService: EmpService) { }

  ngOnInit() {
  	this.empForm=this.formBuilder.group({
	  	name: ['',[Validators.required,Validators.minLength(2), Validators.maxLength(5)]],
	  	email: ['',[Validators.required,emailValidator]],
      age: ['',[Validators.required,ageRangeValidator]],
	    phone: ['',[Validators.required,phoneNumberValidator]],
	  	countryList: ['India']
	  });
	  
	  //Get all employees
     this.empService.getEmployees()
      .subscribe( data => {
        this.allemployee = data;
        console.log('Employee get:OnSubmit '+this.allemployee);
     });
	  
	  
  }
  
  onSubmit():void{

	this.empdata=this.empForm.value;
  	console.log('EMPLOYEE Data:in OnSubmit method '+JSON.stringify(this.empdata));
  	
  	console.log(this.empForm.controls.name.value);
  	console.log(this.empForm.get('name').value);
	
	this.employee ={
		'name': this.empForm.controls.name.value,
		'email': this.empForm.controls.email.value,
		'id': '444'
		
	}
	 
	 console.log("onSubmit employee:: "+this.employee.name);
	 console.log("onSubmit employee:: "+this.employee.email);
	 console.log("onSubmit employee:: "+this.employee.id);
	 
	 
	 this.empService.createEmployee(this.employee)
      .subscribe( data => {
        this.employee = data;
        console.log('Employee Saved::OnSubmit '+this.employee.name);
     });
     
     //Get all employees
     this.empService.getEmployees()
      .subscribe( data => {
        this.allemployee = data;
        console.log('Employee get:OnSubmit '+this.allemployee);
     });
      
  	this.router.navigate(['/create']);
  	
}

deleteEmployee(emp: Emp):void{
  	alert('emp: '+emp.name);
  }

  editEmployee(emp: Emp):void{
  	alert('emp country: '+emp.country);
  	//localStorage.setItem("name",emp.name);
  	//localStorage.setItem("email",emp.email);
    //localStorage.setItem("country",emp.country);

    //Storing Emp Emp Object
    localStorage.setItem('emp', JSON.stringify(emp));
    this.router.navigate(['edit']);
  }
  revert():void {
    this.empForm.reset();
  }

}

/*function ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
    return { 'ageRange': true };
  }
  return null;
}*/
