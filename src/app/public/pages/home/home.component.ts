import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ServiceResponse } from 'src/app/admin/interface.admin';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private _products: Product[] = [];
  private term: string = '';
  products: Product[] = [];
  cartItems: string[] = [];

  constructor(private productService: ProductService, private cartService: CartService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(param => {
      this.term = param['search'];
      this.search();
    });
    
    this.cartService.get().subscribe(({ response }) => this.cartItems = response.map(({ id }: Product) => id));
  }
  
  search() {
    this.productService.get().subscribe(({ response }: ServiceResponse) => {
      this._products = response;

      if (!this.term) {
        this.products = [...this._products];
        return;
      }

      this.products = this._products.filter(({ name }) => name.toLowerCase().includes(this.term.toLowerCase()));
    });
  }

  addProductToCart(product: Product) {
    this.cartService.add(product).subscribe(res => {

    });
  }
}
