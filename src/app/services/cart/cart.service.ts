import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from 'src/app/admin/interface.admin';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  add(product: Product) {
    const cartItems = sessionStorage.getItem('cart');
    const response = of({ message: 'Agregado al carrito', status: 'success' });

    if (!cartItems) {
      sessionStorage.setItem('cart', JSON.stringify([product]));
      return response;
    }
    const _cartItems = JSON.parse(cartItems);

    if (_cartItems.find(({ id }: Product) => id === product.id)) {
      return of({ message: 'Producto ya se encuentra en el carrito', status: 'warning' });
    }

    _cartItems.push(product);
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
}
