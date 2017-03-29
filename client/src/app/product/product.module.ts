import {NgModule} from "@angular/core";
import {ProductComponent} from "./product.component";
import {ProductContentComponent} from "./content/product-content.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {ProductRoutingModule} from "./product-routing.module";
import {CommonService} from "../common/common.service";
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
        ProductContentComponent
    ],
    providers: [
        CommonService
    ]
})
export class ProductModule {
}