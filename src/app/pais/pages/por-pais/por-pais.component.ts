import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino : string = '';
  hayError: boolean = false;
  paises  : Pais[] = [];
  paisesSugeridos  : Pais[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ){}

  buscar (termino:string) {
    this.mostrarSugerencias = false;
    this.hayError = false;

    // Si hay respuesta 
    this.termino = termino;
    this.paisService.buscarPais( this.termino )
  
      .subscribe( (paises)=> {     
        this.paises = paises;  
        console.log( paises );

      // despues de la , manejariamos el error que podemos capturar como que no haya resultados
    }, (err) =>{
        this.hayError = true;
        this.paises   = [];
    });
  }

    sugerencias( termino:string ) {
      this.hayError = false;
      this.termino = termino;
      this.mostrarSugerencias = true;

      this.paisService.buscarPais( termino )
        .subscribe(
           paises => this.paisesSugeridos = paises.splice(0,5),
           (err) => this.paisesSugeridos = []
           )
    }

    buscarSugerido( termino:string ){
      this.buscar( termino );

    }
  
}






// buscar () {
//   console.log(this.termino);
//   // Si hay respuesta 
//   this.paisService.buscarPais( this.termino )
//     .subscribe({complete:  resp=> {
//       this.hayError = false;
//     console.log( resp );
//     // despues de la , manejariamos el error que podemos capturar como que no haya resultados
//   }}, (err) =>{
//       this.hayError = true;
//   });
// }
// }