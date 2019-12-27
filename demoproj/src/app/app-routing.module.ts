import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmpComponent } from './employee/create-emp.component';
import { ListComponent } from './employee/list.component';
import { EditComponent } from './employee/edit.component';
import { HomeComponent } from './homecomponent/home/home.component';


const routes: Routes = [
	{path: 'create', component: CreateEmpComponent },
	{path: 'list', component: ListComponent },
  {path: 'edit', component: EditComponent },
  {path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
