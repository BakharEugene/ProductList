import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";
import {ProductService} from "../product.service";

@Component({
    selector: 'product-update-component',
    templateUrl: 'product-update.component.html',
    styleUrls: ['product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
    productForm: FormGroup;
    loading: boolean = false;
    product: Product;
    productsURL = '/server/routes/product/';

    constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.createEmptyForm();
        this.load();
    }

    private createEmptyForm(): void {
        this.productForm = new FormGroup({
            name: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            price: new FormControl('', Validators.required)
        });
    }

    private load(): void {
        this.productService.loadById(this.productsURL, this.route.snapshot.params['id'])
            .subscribe(
                product => {
                    this.product = product;
                    this.fillForm(this.product)
                },
                error => this.logError(error));
    }

    private fillForm(product: Product): void {
        this.productForm.setValue({
            name: product.name,
            description: product.description,
            price: product.price
        });
    }

    onSubmit(): void {
        this.loading = true;
        this.fillUpdatedProduct();
        this.productService.update(this.productsURL, this.product)
            .subscribe(
                () => this.router.navigate(['product/product-content']),
                err => this.logError(err));
    }

    private fillUpdatedProduct(): void {
        this.product.name = this.productForm.value.name;
        this.product.description = this.productForm.value.description;
        this.product.price = this.productForm.value.price;
    }

    logError(error): void {
        this.loading = false;
        console.error('There was an error: ' + error.message ? error.message : error.toString());
        this.router.navigate(['/']);
    }
}