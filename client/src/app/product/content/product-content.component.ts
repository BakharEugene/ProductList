import {Component, OnInit} from "@angular/core";
import {Product} from "../../model/product";
import {CommonService} from "../../common/common.service";

@Component({
    selector: 'product-content-component',
    templateUrl: 'product-content.component.html'
})
export class ProductContentComponent implements OnInit{
    productList: Product[];

    constructor(private productService: CommonService) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    private loadData() {
        this.productService.loadAll('/server/routes/product/products/')
            .subscribe(productList => this.productList = productList);
    }
}