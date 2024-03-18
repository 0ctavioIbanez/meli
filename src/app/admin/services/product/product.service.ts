import { Injectable } from '@angular/core';
import { Product, ServiceResponse } from '../../interface.admin';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  create(product: Product): Observable<ServiceResponse> {
    const message = 'Producto guardado correctamente';
    const savedProducts = sessionStorage.getItem('products');
    if (!savedProducts) {
      sessionStorage.setItem('products', JSON.stringify([product]));
      return of({ message, status: 'success' });
    }
    const _products = JSON.parse(savedProducts);
    _products.push(product);
    sessionStorage.setItem('products', JSON.stringify(_products));
    return of({ message, status: 'success' });
  }

  update(productId: string, info: Product) {
    const savedProducts = sessionStorage.getItem('products');
    if (!savedProducts) {
      return of({ message: 'No hay ningún producto registrado', status: 'error' });
    }

    const _products = JSON.parse(savedProducts);
    const productToEditIdx = _products.findIndex(({ id }: Product) => id === productId);

    if (productToEditIdx < 0) {
      return of({ message: 'Ningún producto coincide con la búsqueda', status: 'warning' });
    }

    _products[productToEditIdx] = info;
    return of({ message: 'Producto actualizado correctamente', status: 'success' });
  }

  delete(productId: string) {
    const _products = sessionStorage.getItem('products');
    if (!_products) {
      return of({ message: 'Ningún producto registrado', status: 'error' })
    }
    const _currentProducts = JSON.parse(_products).filter(({ id }: Product) => id !== productId);
    sessionStorage.setItem('products', _currentProducts);
    return of({ message: 'Producto eliminado correctamente', status: 'success' });
  }
}
