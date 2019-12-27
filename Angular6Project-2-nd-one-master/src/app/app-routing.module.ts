import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmpComponent } from './emp/create-emp.component';
import { ListEmpComponent } from './emp/list-emp.component';
import { EditComponent } from './emp/edit.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { FormarrayEditComponent } from './formarray/formarray-edit.component';
import { FirstComponent } from './datasharing/first.component';
import { SecondComponent } from './datasharing/second.component';

const routes: Routes = [
	{path: 'create', component: CreateEmpComponent },
	{path: 'list', component: ListEmpComponent },
  {path: 'edit', component: EditComponent },
  {path: 'formarray', component: FormarrayComponent },
  {path: 'formarrayedit/:id', component: FormarrayEditComponent },
  {path: 'first', component: FirstComponent },
  {path: 'second', component: SecondComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
