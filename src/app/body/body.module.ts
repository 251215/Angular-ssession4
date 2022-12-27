import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarralateralComponent } from './barralateral/barralateral.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    BarralateralComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class BodyModule { }
