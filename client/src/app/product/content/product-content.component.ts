import {Component, OnInit} from "@angular/core";
import {Product} from "../../model/product";
import {ProductService} from "../product.service";

@Component({
    selector: 'product-content-component',
    templateUrl: 'product-content.component.html'
})
export class ProductContentComponent implements OnInit{
    productList: Product[];
    productsURL = '/server/routes/product/products/';

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    private loadData() {
        this.productService.loadAll(this.productsURL)
            .subscribe(productList => this.productList = productList);
    }

    onDelete(identifier: number): void {
        this.productService.remove(this.productsURL, identifier)
            .subscribe(result => result ? this.loadData() : alert("Error!"),
                error => alert(error));
    }
}