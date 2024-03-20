import { Injectable } from '@angular/core';
import { Model, Product, Sale } from '../../admin/interface.admin';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor() { }

  new(sale: Sale) {
    const _sales = sessionStorage.getItem('sales');
    const response = of({ message: 'Venta registrada correctamente', status: 'success' });

    if (!_sales) {
      sessionStorage.setItem('sales', JSON.stringify([sale]));
      return response;
    }

    const sales = JSON.parse(_sales);
    sales.push(sale);
    sessionStorage.setItem('sales', JSON.stringify(sales));
    const { productId, modelId, quantity } = sale;
    this.decreaseStock(productId, modelId, quantity);
    return response;
  }

  private decreaseStock(productId: string, modelId: string, quantity: number) {
    const _products = sessionStorage.getItem('products');

    if (!_products) {
      return false
    }
    
    const products = JSON.parse(_products);
    const productPos = products.findIndex(({ id }: Product) => id === productId);
    const modelPos = products[productPos].models.findIndex(({ id }: Model) => id === modelId);
    const currentStock = Number(products[productPos].models[modelPos].stock);
    products[productPos].models[modelPos].stock = currentStock - quantity;
    sessionStorage.setItem('products', JSON.stringify(products));
    return true;
  }
}
