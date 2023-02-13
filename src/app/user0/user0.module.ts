import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User0Component } from './user0.component';
import { User0RoutingModule } from './user0-routing.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [User0Component],
  imports: [CommonModule, User0RoutingModule, SharedModule],
  exports: [User0Component],
})
export class User0Module {}
