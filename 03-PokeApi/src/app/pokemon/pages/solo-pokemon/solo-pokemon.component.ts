import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PokemonResponse } from '../../interface/pokemon.interfaces';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-solo-pokemon',
  templateUrl: './solo-pokemon.component.html',
 
})
export class SoloPokemonComponent implements OnInit{


  pokemon!: any;
  especie!: any ;
  notas : string []= [];
  constructor(private servicePokemon: PokemonService,
              private activateRoute : ActivatedRoute) { }

//pokemon Response flavor_text_entries[26]



  


  ngOnInit(): void {
    
   this.activateRoute.params
    .pipe(switchMap(({id})=> this.servicePokemon.obtenerPokemon(id)),tap(console.log)
    )
    .subscribe(pokemon => {
      this.pokemon = pokemon
    }
   );

   this.activateRoute.params
   .pipe(switchMap(({id})=> this.servicePokemon.obtenerEspecie(id)),tap(console.log)
   )
   .subscribe(pokemon => {
     this.especie = pokemon;
     for(let esp of this.especie.flavor_text_entries){
      if(esp.language.name === "es"){
        if(!this.notas.includes(esp.flavor_text.trim())){
          this.notas.push(esp.flavor_text.trim())
        }
      }  
     }
   }
  );

 

  }

  //console.log(esp.language.name)

}
