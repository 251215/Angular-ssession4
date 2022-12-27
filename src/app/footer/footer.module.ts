import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiedepagComponent } from './piedepag/piedepag.component';



@NgModule({
  declarations: [
    PiedepagComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PiedepagComponent,
  ],
})
export class FooterModule { }
