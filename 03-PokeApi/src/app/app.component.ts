import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '03-PokeApi';

scrollevento(variable : any){
  window.onscroll = ()=>{
    let posicion = window.pageYOffset || document.documentElement.scrollTop;

    let element1 : any  = document.querySelector(".icon-pokemon");
    element1.style.bottom = posicion * 0.2 + "px";
  }
}



}
