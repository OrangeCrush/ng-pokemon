import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IvcalcComponent } from './ivcalc/ivcalc.component';

const routes: Routes = [
  {
    path: 'ivcalc',
    component : IvcalcComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
