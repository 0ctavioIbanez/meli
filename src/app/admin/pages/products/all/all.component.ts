import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModelActionClick, Product, ServiceResponse } from 'src/app/admin/interface.admin';
import { ProductService } from 'src/app/admin/services/product/product.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent {
  products: Product[] = [];
  showSaleElement: boolean = false;
  showEnterElement: boolean = false;

  constructor(private productService: ProductService, private router: Router) {
    this.productService.get().subscribe(({ response }: ServiceResponse) => {
      console.log("ls", response);
      
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

  modelActionClick({ action, modelId }: ModelActionClick, productId: string) {
    console.log(action);
    
    if (action === 'edit') {
      this.router.navigateByUrl(`/admin/products/product?productId=${productId}&modelId=${modelId}`);
      return
    }
    if (action === 'out') {
      this.showSaleElement = true;
      return;
    }
    if (action === 'in') {
      this.showEnterElement = true;
    }
  }
}
