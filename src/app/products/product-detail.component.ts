import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
 
})
export class ProductDetailComponent {
  pageTitle: string ="Product List";
  product: IProduct | undefined;
  err:any;

  constructor(private route:ActivatedRoute, private router:Router, private productService:ProductService){}

  ngOnInit(): void{
    const productId=Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(productId).subscribe({
      next:product=>this.product=product,
      error:err => console.error(err)
    });
  }

  onBack(): void{
    this.router.navigate(['./products']);
  }

}
