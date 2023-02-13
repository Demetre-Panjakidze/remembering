import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User4Component } from './user4.component';
import { User4RoutingModule } from './user4-routing.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [User4Component],
  imports: [CommonModule, User4RoutingModule, SharedModule],
  exports: [User4Component],
})
export class User4Module {}
