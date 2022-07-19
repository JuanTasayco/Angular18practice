import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageNavigationComponent
  ],

  exports: [
    PageNavigationComponent
  ],

  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
