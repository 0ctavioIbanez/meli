import { Injectable } from '@angular/core';
import { Model, Product } from '../../interface.admin';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() { }

  addToProduct(productId: string, models: Model[]) {
    const products = sessionStorage.getItem('products');
    if (!products) {
      return of({ message: 'No se pudo encontrar el producto', status: 'error' });
    }
    
    const _products = JSON.parse(products);
    const productIdx = _products.findIndex(({ id }:Product) => id === productId);
    const productToUpdate = _products[productIdx];
    _products[productIdx] = {...productToUpdate, models };
    console.log("Result", _products);
    
    sessionStorage.setItem('products', JSON.stringify(_products));
    return of({ message: 'Modelo agregado al producto con éxito', status: 'success' });
  }
}
