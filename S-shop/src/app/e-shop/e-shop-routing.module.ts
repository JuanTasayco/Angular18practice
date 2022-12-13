import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "home", component: HomeComponent },
      { path: "home/category/:id", component: CategoriesComponent },
      { path: "**", redirectTo: "home" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EShopRoutingModule { }
