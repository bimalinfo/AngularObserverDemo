import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpviewComponent } from './empview/empview.component';
import { CreateEmpComponent } from './employee/create-emp.component';
import { ListComponent } from './employee/list.component';
import { EditComponent } from './employee/edit.component';
import { EmployeeService } from './employee/employee.service';
import { MainComponent } from './employee/main.component';
import { HomeComponent } from './homecomponent/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpviewComponent,
    CreateEmpComponent,
    ListComponent,
    EditComponent,
    MainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
