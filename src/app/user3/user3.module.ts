import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User3Component } from './user3.component';
import { User3RoutingModule } from './user3-routing.module';

@NgModule({
  declarations: [User3Component],
  imports: [CommonModule, User3RoutingModule],
  exports: [User3Component],
})
export class User3Module {}
