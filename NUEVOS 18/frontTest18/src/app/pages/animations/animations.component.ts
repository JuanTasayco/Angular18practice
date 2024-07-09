import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CodeBlockerComponent } from '../components/code-blocker/code-blocker.component';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [CommonModule, CodeBlockerComponent],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.scss'
})
export class AnimationsComponent {



}
