import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User3Component } from './user3.component';

const routes: Routes = [
  {
    path: '',
    component: User3Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class User3RoutingModule {}
