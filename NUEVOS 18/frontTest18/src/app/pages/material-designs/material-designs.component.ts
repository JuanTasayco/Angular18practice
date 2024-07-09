import { Component, ViewEncapsulation } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-material-designs',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule],
  templateUrl: './material-designs.component.html',
  styleUrl: './material-designs.component.scss'
})
export class MaterialDesignsComponent {

}
