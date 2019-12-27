import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmpComponent } from './emp/create-emp.component';
import { HttpClientModule } from '@angular/common/http';

import { EmpService } from './emp/emp.service';
import { ListEmpComponent } from './emp/list-emp.component';
import { EditComponent } from './emp/edit.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { FormarrayEditComponent } from './formarray/formarray-edit.component';
import { FirstComponent } from './datasharing/first.component';
import { SecondComponent } from './datasharing/second.component';
import {DataService} from "./datasharing/data.service";

@NgModule({
  declarations: [
    AppComponent,
    CreateEmpComponent,
    ListEmpComponent,
    EditComponent,
    FormarrayComponent,
    FormarrayEditComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmpService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
