import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestFusionComponent } from './test-fusion/test-fusion.component';
import { FusionRoutingModule } from './fusion.routes';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TestFusionComponent],
  imports: [
    CommonModule,
    FusionRoutingModule,
    CalendarModule,
    MatCardModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [provideNativeDateAdapter()],
})
export class SyncfusionModule { }
