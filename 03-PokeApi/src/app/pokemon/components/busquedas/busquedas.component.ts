import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
/* import { PokemonService } from '../../services/pokemon.service'; */

@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.component.html',
  
})
export class BusquedasComponent {




@Output() onEmitirPokemon: EventEmitter<string> = new EventEmitter();

  obtenerPokemon(pokemon : HTMLInputElement){
    this.onEmitirPokemon.emit(pokemon.value);
    pokemon.value = "";
  }
  



    constructor(private servicePokemon: PokemonService) { }

}
