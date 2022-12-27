import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-barralateral',
  templateUrl: './barralateral.component.html',
  styleUrls: ['./barralateral.component.css']
})
export class BarralateralComponent {
  producto: string = 'Agrega un producto';
  
  agregarproducto(){
    this.producto= "Camiseta Blanquiazul"
  }
}
