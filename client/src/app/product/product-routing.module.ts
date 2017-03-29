import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./product.component";
import {ProductContentComponent} from "./content/product-content.component";

export const routes: Routes = [
    {
        path: 'product', component: ProductComponent,
        children: [
            {path: 'product-content', component: ProductContentComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {
}