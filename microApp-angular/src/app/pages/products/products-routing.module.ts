import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
    {
      path: '',
      component: ProductsComponent,
      children: [
        {
          path: '',
          component: ProductListComponent,
        }]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class ProductsRoutingModule { }