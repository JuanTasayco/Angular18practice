import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ConfigUserComponent } from './pages/config-user/config-user.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "config",
        component: ConfigUserComponent
      },
      {
        path: "add-product",
        component: AddProductComponent
      },
      {
        path: "editar/:id",
        component: AddProductComponent
      },
      {
        path: "**",
        redirectTo: "add-product"
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
