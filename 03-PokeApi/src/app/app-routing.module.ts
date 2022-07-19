import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pokemon/pages/main-page/main-page.component';
import { Pagina2Component } from './pokemon/pages/pagina2/pagina2.component';
import { SoloPokemonComponent } from './pokemon/pages/solo-pokemon/solo-pokemon.component';



const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
    pathMatch:"full",
  },

  {

    path: "pagina2",
    component: Pagina2Component,

  },

  {
    path: "pokemon/:id",
    component: SoloPokemonComponent,
  },

  {

    path: "**",
    redirectTo: "",
  }

]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
