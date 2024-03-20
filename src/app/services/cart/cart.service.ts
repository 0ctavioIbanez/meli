import { Injectable, signal } from '@angular/core';
import { of } from 'rxjs';
import { Product } from 'src/app/admin/interface.admin';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  total = signal(0);

  constructor() { }

  setQuantity() {
    const cartItems = sessionStorage.getItem('cart');
    if (cartItems) {
      this.total.set(JSON.parse(cartItems).length);
    }
  }

  add(product: Product) {
    const cartItems = sessionStorage.getItem('cart');
    const response = of({ message: 'Agregado al carrito', status: 'success' });

    if (!cartItems) {
      sessionStorage.setItem('cart', JSON.stringify([product]));
      this.total.set(1);
      return response;
    }

    const _cartItems = JSON.parse(cartItems);

    if (_cartItems.find(({ id }: Product) => id === product.id)) {
      return of({ message: 'Producto ya se encuentra en el carrito', status: 'warning' });
    }

    _cartItems.push(product);
    this.total.set(_cartItems.length);
    sessionStorage.setItem('cart', JSON.stringify(_cartItems));
    return response;
  }

  get() {
    const items = sessionStorage.getItem('cart');
    if (!items) {
      return of({ message: 'No se encontraron resultados', status: 'warning', response: [] });
    }
    return of({ message: '', status: 'succcess', response: JSON.parse(items) });
  }

  remove(productId: string) {
    const _items = sessionStorage.getItem('cart');
    if (!_items) {
      return of({ message: 'No se encontró el producto', status: 'error' });
    }
    const items = JSON.parse(_items);
    sessionStorage.setItem('cart', JSON.stringify(items.filter(({ id }: Product) => id !== productId)));
    return of({ message: 'Producto quitado del carrito', status: 'success' });
  }
}
