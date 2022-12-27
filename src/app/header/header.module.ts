import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { OperacionComponent } from './operacion/operacion.component';



@NgModule({
  declarations: [
    MenuComponent,
    OperacionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    OperacionComponent,
  ]
})
export class HeaderModule { }
