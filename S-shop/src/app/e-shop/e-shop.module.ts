import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EShopRoutingModule } from './e-shop-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SidenavShopComponent } from './shared/sidenav-shop/sidenav-shop.component';
import { NavbarShopComponent } from './shared/navbar-shop/navbar-shop.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';




@NgModule({
  declarations: [
    HomeComponent,
    SidenavShopComponent,
    NavbarShopComponent,
    ProductsComponent,
    CategoriesComponent,
    FooterComponent,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    EShopRoutingModule
  ]
})
export class EShopModule { }
