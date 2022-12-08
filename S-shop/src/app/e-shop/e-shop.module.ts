import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EShopRoutingModule } from './e-shop-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    EShopRoutingModule
  ]
})
export class EShopModule { }
