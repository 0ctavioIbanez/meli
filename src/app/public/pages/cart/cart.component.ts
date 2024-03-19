import { Component } from '@angular/core';
import { Model, Product, Purchasing } from 'src/app/admin/interface.admin';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  private products: Product[] = [];
  items: Purchasing[] | any = [];
  purchaseDetails: any = [];

  constructor(private cartService: CartService) {
    this.cartService.get().subscribe(({ response }) => {
      this.products = response;
      this.items = this.products.map(({ price, id, image, name, models = [] }: Product) => ({ price, productId: id, quantity: 0, modelId: '', image, name, models }));
    });
  }

  getTotal(_productId: string | false = false) {
    if (!_productId) {
      return this.items.reduce((acc: number, { quantity, price }: Purchasing) => ((quantity*price) + acc), 0);
    }

    const { quantity = 0, price = 0 } = this.items.find(({ productId }: Purchasing) => productId === _productId) || {};
    return quantity *  price;
  }

  onCartDetailChange(_productId: any, { name, value }: any) {
    const itemIdx = this.items.findIndex(({ productId }: Purchasing) => productId === _productId);
    this.items[itemIdx][name] = value;
  }

  getMax({ productId, modelId = '' }: Purchasing) {
    const { models } = this.items.find(({ productId: _productId }: Purchasing) => productId === _productId);
    const { stock } = models.find(({ id }: Model) => modelId === id) || {};
    return stock || false;
  }
}
