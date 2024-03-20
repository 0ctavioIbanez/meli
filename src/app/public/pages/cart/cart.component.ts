import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Model, Product, Purchasing, Sale } from 'src/app/admin/interface.admin';
import { CartService } from 'src/app/services/cart/cart.service';
import { SalesService } from 'src/app/services/sales/sales.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  private products: Product[] = [];
  items: Purchasing[] | any = [];

  constructor(private cartService: CartService, private saleService: SalesService, private toast: NgToastService) {
    this.getItems();
  }

  getItems() {
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

  get isPurchasingInfoComplete() {
    const mandatoryValues = this.items.map(({ modelId, quantity }: Purchasing) => ({ modelId, quantity}));
    return mandatoryValues.every(({ modelId, quantity }: Purchasing) => modelId && quantity);
  }

  async purchasing() {
    const id = v4();
    const salesPayload = this.items.map(({productId, modelId, quantity, price }: Purchasing) => ({
      id,
      productId,
      modelId,
      quantity,
      total: quantity * price
    }));
    salesPayload.forEach((sale: Sale) => {
      this.saleService.new(sale).subscribe(res => console.log(res));
    });
    sessionStorage.removeItem('cart');
    this.toast.success({ detail: 'Compra exitosa', summary: 'Tus productos van en camino'});
    this.items = [];
  }

  requestDetele(productId: string) {
    const shouldDelete = confirm('¿Quitar del producto?');
    if (!shouldDelete) {
      return;
    }
    this.cartService.remove(productId).subscribe(({ message }) => {
      this.toast.success({ detail: message });
      this.getItems();
      this.cartService.setQuantity();
    })
  }
}
