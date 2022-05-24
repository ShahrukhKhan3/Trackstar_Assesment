import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddproductRoutingModule } from './addproduct-routing.module';
import { AddproductComponent } from './addproduct.component';

import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AddproductComponent
  ],
  imports: [
    CommonModule,
    AddproductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[],
})
export class AddproductModule { 

}

