import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  {path:"home", component:FormComponent},
  {path:"About", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
