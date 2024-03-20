import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Model, Product } from 'src/app/admin/interface.admin';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor() { }

  update(productId: string, modelId: string, quantity: number) {
    const _products = sessionStorage.getItem('products');

    if (!_products) {
      return of({ message: 'No se encontraron productos', status: 'error' });
    }
    
    const products = JSON.parse(_products);
    const productPos = products.findIndex(({ id }: Product) => id === productId);
    const modelPos = products[productPos].models.findIndex(({ id }: Model) => id === modelId);
    const currentStock = Number(products[productPos].models[modelPos].stock);
    products[productPos].models[modelPos].stock = currentStock + quantity;
    sessionStorage.setItem('products', JSON.stringify(products));
    return of({ message: 'Modelo actualizado con éxito', status: 'success' });
  }
}
