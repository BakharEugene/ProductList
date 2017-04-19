import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./product.component";
import {ProductContentComponent} from "./content/product-content.component";
import {ProductCreateComponent} from "./create/product-create.component";
import {ProductUpdateComponent} from "./update/product-update.component";

export const routes: Routes = [
    {
        path: 'product', component: ProductComponent,
        children: [
            {path: 'product-content', component: ProductContentComponent},
            {
                path: 'product-create',
                component: ProductCreateComponent
            },
            {
                path: 'product-update/:id',
                component: ProductUpdateComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {
}