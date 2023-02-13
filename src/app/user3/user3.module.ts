import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User3Component } from './user3.component';
import { User3RoutingModule } from './user3-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [User3Component],
  imports: [CommonModule, User3RoutingModule, SharedModule],
  exports: [User3Component],
})
export class User3Module {}
