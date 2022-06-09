import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  @Output() onAlex: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string= '';

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit( valor );
    });
  }

  teclaPresionada (){
    this.debouncer.next( this.termino );
  }

  buscar (){
    this.onAlex.emit (this.termino);
  }

  // Podriamos capturar el evento en el imput
  // teclaPresionada ( event: any ){
  //   const valor = event.target.value;
  //   console.log(valor);

  //   console.log(this.termino);
  // }

}
