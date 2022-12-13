import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SidenavAdminComponent } from './shared/sidenav-admin/sidenav-admin.component';
import { NavbarAdminComponent } from './shared/navbar-admin/navbar-admin.component';
import { AddProductComponent } from './pages/add-product/add-product.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidenavAdminComponent,
    NavbarAdminComponent,
    AddProductComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
