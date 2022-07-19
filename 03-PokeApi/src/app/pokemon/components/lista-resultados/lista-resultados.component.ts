import { Component, Input, OnInit } from '@angular/core';
import { PokemonResponse } from '../../interface/pokemon.interfaces';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-lista-resultados',
  templateUrl: './lista-resultados.component.html',
  styles : [ 
    `
    .card--pointer{
      cursor:pointer;
    }
    
    
    `
  
  ]

})
export class ListaResultadosComponent {

/* @Input("pokemonsArray") arregloPokemons! : PokemonResponse; */
  @Input("pokemonArray") allPokemons : any [] = [];
/*   @Input("pokemon") pokemon!: any; */





 


  constructor(private pokemonService : PokemonService) { }
}
