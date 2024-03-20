import { Injectable } from '@angular/core';
import { Model, Product } from '../../admin/interface.admin';
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
    sessionStorage.setItem('products', JSON.stringify(_products));
    return of({ message: 'Modelo agregado al producto con éxito', status: 'success' });
  }

  remove(productId: string, modelId: string) {
    const _products = sessionStorage.getItem('products');
    if (!_products) {
      return of({ message: 'No se pudo encontrar el producto', status: 'error' });
    }
    const products = JSON.parse(_products);
    const productIdx = products.findIndex(({ id }:Product) => id === productId);
    const productToUpdate = products[productIdx];
    const { models } = products[productIdx];
    productToUpdate.models = models.filter(({ id }: Model) => id !== modelId);
    products[productIdx] = productToUpdate;
    sessionStorage.setItem('products', JSON.stringify(products));
    return of({ message: 'Modelo eliminado', status: 'success' });
  }
}
