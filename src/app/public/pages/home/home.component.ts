import { Component } from '@angular/core';
import { Product, ServiceResponse } from 'src/app/admin/interface.admin';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: Product[] = [];
  cartItems: string[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {
    this.productService.get().subscribe(({ response }: ServiceResponse) => this.products = response);
    this.cartService.get().subscribe(({ response }) => this.cartItems = response.map(({ id }: Product) => id));
  }

  addProductToCart(product: Product) {
    this.cartService.add(product).subscribe(res => {
      
    });
  }
}
