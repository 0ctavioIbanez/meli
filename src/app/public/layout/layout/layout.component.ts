import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
    total: number = this.cart.total();

    constructor(public cart:CartService) {
      this.cart.setQuantity();
    }
}
