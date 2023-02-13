import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User4Component } from './user4.component';

const routes: Routes = [
  {
    path: '',
    component: User4Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class User4RoutingModule {}
