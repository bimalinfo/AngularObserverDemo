import { Component, OnInit } from '@angular/core';
import { FormsModule, AbstractControl, FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { phoneNumberValidator } from "../validator/form-validator";
import { ageRangeValidator } from "../validator/form-validator";
import {emailValidator} from "../validator/form-validator";
import {MessagecommunicationserviceService} from '../messagecommnication/messagecommunicationservice.service';

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
  dataAfS:string;
  orderForm: FormGroup;
  items: FormArray;

  countries = ['USA', 'Canada', 'Uk', 'India'];
    constructor(private formBuilder: FormBuilder,private router: Router,public empService: EmployeeService,private messagecommunicationserviceService:MessagecommunicationserviceService) { }
  
    ngOnInit() {
      this.empForm=this.formBuilder.group({
        name: ['',[Validators.required,Validators.minLength(2), Validators.maxLength(5)]],
        email: ['',[Validators.required,emailValidator]],
        age: ['',[Validators.required,ageRangeValidator]],
        phone: ['',[Validators.required,phoneNumberValidator]],
        countryList: ['India'],
        items: this.formBuilder.array([ this.createItem() ])
      });
      
      //Get all employees
       this.empService.getEmployees()
        .subscribe( data => {
          this.allemployee = data;
          console.log('Employee get:OnSubmit '+this.allemployee);
       });
    }
    
    createItem(): FormGroup {
      return this.formBuilder.group({
        name: '',
        description: '',
        price: ''
      });
    }
    addItem(): void {
      this.items = this.orderForm.get('items') as FormArray;
      this.items.push(this.createItem());
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
  
  deleteEmployee(emp: Employee):void{
      alert('emp: '+emp.name);
    }
  
    editEmployee(emp: Employee):void{
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
    
    onSearchChange(searchValue: string): boolean {  
      console.log(searchValue);
      let isValid=false;
      //this.dataAfS= this.specialcharecter(searchValue);
      isValid =this.alphanumeric(searchValue);

     // this.empForm.patchValue({
       // name: this.dataAfS
      //});
      //return this.dataAfS;
      return isValid;
    }

    specialcharecter(data:string):string
    {
          var iChars = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";  
          data = data.replace(/[^a-zA-Z0-9]/g, ''); 
          //alert('data'+data);
          /*for (var i = 0; i < data.length; i++)
          {      
              if (iChars.indexOf(data.charAt(i)) != -1)
              {    
              alert ("Your string has special characters. \nThese are not allowed.");
              //document.getElementById("txtCallSign").value = "";
              return false; 
              } 
          }*/
          return data;
    }

    alphanumeric(data:string):boolean
    {
          var isValid = false;
          var regex = /^[a-zA-Z0-9%*#\s'.,_()]*$/;
          isValid = regex.test(data);
          console.log('Valid-->'+isValid);
          return isValid;
    }



    sendMessageToListComponent(): void {
      alert('1...'+this.empForm.controls.name.value);
      // send message to subscribers via observable subject
      //this.messagecommunicationserviceService.sendMessage('Message from Create Component to List Component!');
      this.messagecommunicationserviceService.sendMessage(this.empForm.controls.name.value);
  }
  
  clearMessages(): void {
     // clear messages
      this.messagecommunicationserviceService.clearMessages();
  }
  }
