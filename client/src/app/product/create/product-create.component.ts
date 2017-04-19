import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Product} from "../../model/product";
import {ProductService} from "../product.service";

@Component({
    selector: 'product-create-component',
    templateUrl: 'product-create.component.html'
})
export class ProductCreateComponent implements OnInit {
    productForm: FormGroup;
    loading: boolean = false;
    productsURL = '/server/routes/product/';

    constructor(private productService: ProductService, private router: Router) {
    }

    ngOnInit(): void {
        this.createEmptyForm();
    }

    private createEmptyForm(): void {
        this.productForm = new FormGroup({
            name: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            price: new FormControl('', Validators.required)
        });
    }

    onSubmit() {
        this.loading = true;
        const product: Product = new Product(this.productForm.value.name, this.productForm.value.description, this.productForm.value.price);
        this.productService.create(this.productsURL, product)
            .subscribe(result => result ? this.router.navigate(['product/product-content']) : this.errorMsg);
    }

    private errorMsg(): void {
        this.loading = false;
        alert("Error while creating new product!");
    }
}