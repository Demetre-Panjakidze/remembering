import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User0Component } from './user0.component';

const routes: Routes = [
  {
    path: '',
    component: User0Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class User0RoutingModule {}
