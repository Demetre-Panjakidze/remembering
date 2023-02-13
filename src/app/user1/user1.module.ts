import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User1Component } from './user1.component';
import { User1RoutingModule } from './user1-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [User1Component],
  imports: [CommonModule, User1RoutingModule, SharedModule],
  exports: [User1Component],
})
export class User1Module {}
