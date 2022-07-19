import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonService } from './services/pokemon.service';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListaResultadosComponent } from './components/lista-resultados/lista-resultados.component';
import { BusquedasComponent } from './components/busquedas/busquedas.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { RouterModule } from '@angular/router';
import { SoloPokemonComponent } from './pages/solo-pokemon/solo-pokemon.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListaResultadosComponent,
    BusquedasComponent,
    Pagina2Component,
    SoloPokemonComponent,

  ],

  exports: [
      MainPageComponent,
      Pagina2Component,
      SoloPokemonComponent

  ],

  imports: [
    CommonModule,
    RouterModule  
  ],
  
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
