import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from "gsap"
@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html'
})
export class CarrouselComponent implements OnInit, AfterViewInit {
  @ViewChildren("slide") items!: QueryList<ElementRef>;
  @ViewChild("slider") slider!: ElementRef;
  @ViewChild("prev") prevButton!: ElementRef;
  @ViewChild("next") nextButton!: ElementRef;
  @ViewChild("dots") dots!: ElementRef;
  @ViewChildren("dot") dot!: QueryList<ElementRef>;

  itemsMax: number = 0;
  carrouselMove: number = 100;
  carrouselTimer: number = 5000;
  carrouselDuration: number = 0.6;
  arrayItems: ElementRef[] = [];
  index: number = 0;
  autoplay!: any;

  constructor(private cd: ChangeDetectorRef) { }


  ngAfterViewInit(): void {
    this.items.forEach((element, pos) => {
      this.arrayItems.push(element.nativeElement);
      gsap.set(element.nativeElement, { autoAlpha: 0 });
      if (pos === 0) (gsap.set(element.nativeElement, { autoAlpha: 1 }));
    });
    this.itemsMax = this.items.length - 1;

    this.cd.detectChanges(); /* necesary for find content in dot */
    const firstItem = this.dot.find((el, pos) => pos == 0)?.nativeElement;
    firstItem.firstChild.classList.add("activeDot");
  }

  ngOnInit(): void {
  }

  animaciones() {
    /*     const tl = gsap.timeline({ defaults: { ease: "none", duration: 2 } }); */
    this.items.forEach(el => gsap.to(el.nativeElement, { autoAlpha: 0 }))
    const section = this.items.find((elemento, posicion) => posicion == this.index)?.nativeElement;
    gsap.to(section, { autoAlpha: 1 })
  }

  navDot() {
    this.dot.forEach(el => { el.nativeElement.firstChild.classList.remove("activeDot") });
    let dot = this.dot.find((el, pos) => pos == this.index)?.nativeElement;
    dot?.firstChild.classList.add("activeDot");
  }


  clickNext() {
    this.index = this.index === this.itemsMax ? 0 : this.index + 1;
    this.navDot(); this.animaciones();
  }

  clickPrev() {
    this.index = this.index === 0 ? this.itemsMax : this.index - 1;
    this.navDot(); this.animaciones();
  }


  clickDot(dot: number) {
    this.index = dot;
    this.navDot(); this.animaciones();

  }

}
