
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit {

  @ViewChildren("slide") slide!: QueryList<ElementRef>;
  @ViewChild("slider") slider!: ElementRef;
  @ViewChild("slide") oneSlider!: ElementRef;
  maxItems: number = 0;
  index: number = 0;
  widthItem: number = 0;

  sliderItemsContents: any = [
    {
      title: "Monitor alta gama Asus Rog Strix",
      afterPrice: "Desde S/ 30.00",
      beforePrice: "Antes S/60",
      img: "assets/carrou1.jpg"
    },
    {
      title: "Monitor alta gama Asus Rog Strix",
      afterPrice: "Desde S/ 30.00",
      beforePrice: "Antes S/60",
      img: "assets/carrou2.png"
    },
    {
      title: "Monitor alta gama Asus Rog Strix",
      afterPrice: "Desde S/ 30.00",
      beforePrice: "Antes S/60",
      img: "assets/carrou3.jpg"
    },
    {
      title: "Monitor alta gama Asus Rog Strix",
      afterPrice: "Desde S/ 30.00",
      beforePrice: "Antes S/60",
      img: "assets/carrou4.jpg"
    },
    {
      title: "Monitor alta gama Asus Rog Strix",
      afterPrice: "Desde S/ 30.00",
      beforePrice: "Antes S/60",
      img: "assets/carrou5.webp"
    },
    {
      title: "Monitor alta gama Asus Rog Strix",
      afterPrice: "Desde S/ 30.00",
      beforePrice: "Antes S/60",
      img: "assets/carrou1.jpg"
    },
  ]


  constructor() { }

  ngAfterViewInit(): void {
    console.log(window.matchMedia("(min-width:px").matches)
    this.maxItems = (window.matchMedia("(min-width:900px").matches) ? this.slide.length - 2 : this.slide.length - 1;
    this.widthItem = this.oneSlider.nativeElement.clientWidth;
  }

  clickPrev() {
    this.index = this.index == 0 ? this.maxItems : this.index - 1;
    gsap.to(this.slider.nativeElement, {
      x: -this.widthItem * this.index,
    })

  }
  clickNext() {
    this.index = this.index == this.maxItems ? 0 : this.index + 1;
    gsap.to(this.slider.nativeElement, {
      x: -this.widthItem * this.index,
    })
  }


}


