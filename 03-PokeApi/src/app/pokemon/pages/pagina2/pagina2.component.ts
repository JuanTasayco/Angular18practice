import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',

})
export class Pagina2Component  {

  constructor(private pokemonService : PokemonService) { }

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
}