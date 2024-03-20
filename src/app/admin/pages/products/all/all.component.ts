import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ModelActionClick, Product, ServiceResponse } from 'src/app/admin/interface.admin';
import { ProductService } from 'src/app/services/product/product.service';
import { PurchaseService } from 'src/app/services/purchase/purchase.service';
import { SalesService } from 'src/app/services/sales/sales.service';
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

  constructor(private productService: ProductService,
    private saleService: SalesService,
    private router: Router,
    private purchaseService: PurchaseService,
    private toast: NgToastService
  ) {
    this.getProducts();
  }

  getProducts() {
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

  onSale() {
    this.saleService.new({
      id: v4(),
      productId: this.productSelected.id,
      modelId: this.modelSelectedId,
      quantity: this.quantity,
      total: this.quantity * this.productSelected.amount
    }).subscribe(({ message }) => {
      this.toast.success({ detail: message })
      this.quantity = 0;
      this.description = '';
      this.getProducts();
    })
  }

  onPurchase() {
    this.purchaseService.update(this.productSelected.id, this.modelSelectedId, this.quantity)
      .subscribe(({ message }) => {
        this.toast.success({ detail: message });
        this.getProducts();
      })
  }
}
