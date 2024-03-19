import { Component } from '@angular/core';
import { Product } from 'src/app/admin/interface.admin';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items: Product[]  = [];

  constructor(private cartService: CartService) {
    this.cartService.get().subscribe(({ response }) => {
      console.log(response);
      
      this.items = response
    });
  }
}
