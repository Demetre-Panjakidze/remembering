import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User2Component } from './user2.component';
import { User2RoutingModule } from './user2-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [User2Component],
  imports: [CommonModule, User2RoutingModule, SharedModule],
  exports: [User2Component],
})
export class User2Module {}
