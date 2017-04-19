import {Component, OnInit} from "@angular/core";
import {Product} from "../../model/product";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";

@Component({
    selector: 'product-content-component',
    templateUrl: 'product-content.component.html'
})
export class ProductContentComponent implements OnInit{
    productList: Product[];
    productsURL = '/server/routes/product';

    constructor(private productService: ProductService, private router: Router) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    private loadData() {
        this.productService.loadAll(this.productsURL)
            .subscribe(productList => this.productList = productList);
    }

    onEdit(identifier: number): void {
        identifier && this.router.navigate(['product/product-update', identifier]);
    }

    onDelete(identifier: number): void {
        this.productService.remove(this.productsURL, identifier)
            .subscribe(result => result ? this.loadData() : alert("Error!"),
                error => alert(error));
    }
}