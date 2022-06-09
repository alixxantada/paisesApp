import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent {

  @Input() paises:Pais[]=[];
  
  constructor() { }

}
