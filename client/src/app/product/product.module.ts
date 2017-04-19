import {NgModule} from "@angular/core";
import {ProductComponent} from "./product.component";
import {ProductContentComponent} from "./content/product-content.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {ProductRoutingModule} from "./product-routing.module";
import {ProductCreateComponent} from "./create/product-create.component";
import {ProductService} from "./product.service";
import {ProductUpdateComponent} from "./update/product-update.component";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        ProductRoutingModule
    ],
    declarations: [
        ProductComponent,
        ProductContentComponent,
        ProductCreateComponent,
        ProductUpdateComponent
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule {
}