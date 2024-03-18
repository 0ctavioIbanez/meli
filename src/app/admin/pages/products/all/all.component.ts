import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Model, ModelActionClick, Product, ServiceResponse } from 'src/app/admin/interface.admin';
import { ProductService } from 'src/app/admin/services/product/product.service';
import { SalesService } from 'src/app/admin/services/sales/sales.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent {
  products: Product[] = [];
  registerType: string = '';
  modelSelectedId: string = '';
  productSelected: Product | any = {};
  quantity: number = 0;
  description: string = '';

  constructor(private productService: ProductService, private saleService: SalesService, private router: Router) {
    this.productService.get().subscribe(({ response }: ServiceResponse) => {
      this.products = response
    });
  }

  toggleRow(accordion: HTMLTableCellElement, icon: HTMLButtonElement) {
    const isCollapsed = accordion.hasAttribute('collapsed');
    if (isCollapsed) {
      icon.classList.add('rotate-180');
      accordion.removeAttribute('collapsed');
    } else {
      icon.classList.remove('rotate-180');
      accordion.setAttribute('collapsed', '');
    }
  }

  modelActionClick({ action, modelId }: ModelActionClick, productId: string, product: Product) {
    this.productSelected = product;
    if (action === 'edit') {
      this.router.navigateByUrl(`/admin/products/product?productId=${productId}&modelId=${modelId}`);
      return;
    }
    this.registerType = action;
    this.modelSelectedId = modelId;
  }

  confirm() {
    this.saleService.new({
      id: v4(),
      productId: this.productSelected.id,
      modelId: this.modelSelectedId,
      quantity: this.quantity,
      total: this.quantity * this.productSelected.amount
    }).subscribe(res => {
      this.quantity = 0;
      this.description = '';
    })
  }
}
