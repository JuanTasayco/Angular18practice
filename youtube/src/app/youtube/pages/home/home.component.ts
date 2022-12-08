import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {



  ngOnInit(): void {
  }
  @ViewChild("cuadrado") cuadrado!: ElementRef;
  extendido: boolean = true;
  openMenu() {
    this.extendido = !this.extendido;
    if (this.extendido) {
      this.render.setStyle(this.cuadrado.nativeElement, "width", "14rem")
    } else {
      this.render.setStyle(this.cuadrado.nativeElement, "width", "0%")
    }
  }

  constructor(private render: Renderer2) { }
}
