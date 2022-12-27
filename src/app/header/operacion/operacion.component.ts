import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent {
  
  @Input() nombreProducto: string= "Agrega un producto";
  @Output() cambionombreProducto = new EventEmitter<string>();

  //nombreProducto:string = 'alianza lima';
  
  cambiarProducto(){
    this.nombreProducto="Sudadera blanquiazul";
    this.cambionombreProducto.emit(this.nombreProducto);
  }
}

