import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SidenavAdminComponent } from './shared/sidenav-admin/sidenav-admin.component';
import { NavbarAdminComponent } from './shared/navbar-admin/navbar-admin.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidenavAdminComponent,
    NavbarAdminComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
