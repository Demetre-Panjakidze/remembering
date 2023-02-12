import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User2Component } from './user2.component';
import { User2RoutingModule } from './user2-routing.module';

@NgModule({
  declarations: [User2Component],
  imports: [CommonModule, User2RoutingModule],
  exports: [User2Component],
})
export class User2Module {}
