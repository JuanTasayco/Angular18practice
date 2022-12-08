import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-head-nav',
  templateUrl: './head-nav.component.html',
  styleUrls: ['./head-nav.component.scss']
})
export class HeadNavComponent {

  constructor() { }

  @Output() emitEventClick: EventEmitter<MouseEvent> = new EventEmitter();

  clickEventopenMenu(event: any) {
    this.emitEventClick.emit(event);
  }


}
