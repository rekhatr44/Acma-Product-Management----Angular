import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';




@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

})


export class ProductListComponent implements OnInit , OnDestroy {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 50;
    showImage: boolean = true;
    errorMessage: string = ' ';
    private _listFilter: string = '';
    sub! : Subscription;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log("In setter:", value);
        this.filteredProducts = this.performFilter(value);
    }


    filteredProducts: IProduct[] = [];


    products: IProduct[] = [];



    constructor(private productService: ProductService) { } //injecting a service

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
       this.sub= this.productService.getProducts().subscribe({
            next: products => {this.products = products;
            this.filteredProducts = this.products;},

        error: err => this.errorMessage = err
        });
        

    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
    }

}




