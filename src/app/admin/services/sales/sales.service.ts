import { Injectable } from '@angular/core';
import { Sale } from '../../interface.admin';
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
    return response;
  }
}
