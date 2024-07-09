import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-blocker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-blocker.component.html',
  styleUrl: './code-blocker.component.scss'
})
export class CodeBlockerComponent {
  @Input({ required: true }) clase: string = "";

  constructor() {
    /*     const start = Date.now();
        while (Date.now() - start < 3000) { } */
    console.log('mostrando');
  }

}
