import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

private urlAPI = "https://pokeapi.co/api/v2";



obtenerPokemon(pokemon : string ): Observable<any>{
  return this.http.get(`${this.urlAPI}/pokemon/${pokemon}`);
}

obtenerEspecie(pokemon : string ): Observable<any>{
  return this.http.get(`${this.urlAPI}/pokemon-species/${pokemon}`);
}


mostarTodos(id : number):Observable<any>{
  return this.http.get(`${this.urlAPI}/pokemon/${id}`);
}


  constructor(private http : HttpClient) { }
}
