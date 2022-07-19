import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from '../../interface/pokemon.interfaces';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent{

allPokemons : any [] = [];
pokemon!: any;
noExiste : boolean = false;
  
  recibirPokemon(pokemon : string){
    this.allPokemons = [];
    this.pokemonService.obtenerPokemon(pokemon)
        .subscribe(resp=>{
          this.noExiste = false;
          this.pokemon = resp;
        }, (er)=>{
          this.noExiste = true;
        })

 } 

 ngOnInit(): void{

  for(let i=1;i<21;i++){
    this.pokemonService.mostarTodos(i).subscribe((resp)=>{this.allPokemons.push(resp)})
  }   
  
    }

  constructor(private pokemonService : PokemonService) { }
}
