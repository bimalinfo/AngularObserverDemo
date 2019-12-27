import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
empForm: FormGroup;
countries = ['USA', 'Canada', 'Uk', 'India'];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.empForm=this.formBuilder.group({
      name: ['',[Validators.required,Validators.minLength(2), Validators.maxLength(5)]],
      email: ['',[Validators.required]],
      phone: [''],
      countryList: ['India']
    });
    this.setEmpData();
  }
  setEmpData():void{

    //One Way
    //let name=localStorage.getItem("name");
    //let email=localStorage.getItem("email");
    //let countryList=localStorage.getItem("countryList");

    //Alternate Way Retrieve Emp Object
    let emp = JSON.parse(localStorage.getItem('emp'));

    this.empForm.patchValue({
      "name": emp.name,
      "email": emp.email,
      "countryList": emp.country
    });

  }
}
