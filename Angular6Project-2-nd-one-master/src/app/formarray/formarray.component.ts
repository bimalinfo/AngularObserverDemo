import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {phoneNumberValidator} from "../validator/form-validator";
import {Item} from "./item";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {
  empForm: FormGroup;
  orders = [
    { id: 100, name: 'order 1' },
    { id: 200, name: 'order 2' },
    { id: 300, name: 'order 3' },
    { id: 400, name: 'order 4' }
  ];
  orderItems:any;
  constructor(private formBuilder: FormBuilder,private router: Router) {
  }

  ngOnInit() {
    this.empForm = this.formBuilder.group({
      orders: new FormArray([], minSelectedCheckboxes(1))
     //phone: ['',[Validators.required]],
    });

    this.addCheckboxes();
    //this.fillForm();
    this.orderItems=this.getOrderItems();
  }
  private addCheckboxes() {
    this.orders.map((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.empForm.controls.orders as FormArray).push(control);
    });
  }
  private getOrderItems() {
    return [
      { id: 100, name: 'order 1 item 1' },
      { id: 200, name: 'order 2 item 2' },
      { id: 300, name: 'order 3 item 2' },
      { id: 400, name: 'order 4 item 3' }
    ];
  }

  private fillForm():void{
    this.empForm.setValue({
      phone: '99999999999999999'
    });
  }

  submit():void{
  }
  revert():void{
    this.empForm.reset();
  }
  editItem(item: Item){
    alert('item id'+item.id);
    this.router.navigate(['/formarrayedit', item.id]);
  }
}

function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
    // get a list of checkbox values (boolean)
      .map(control => control.value)
      // total up the number of checked checkboxes
      .reduce((prev, next) => next ? prev + next : prev, 0);

    // if the total is not greater than the minimum, return the error message
    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
