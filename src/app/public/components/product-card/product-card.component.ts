import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/admin/interface.admin';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product = {
    id: '',
    name: '',
    amount: '',
    price: 0
  };
  @Output() addCart: EventEmitter<Product> = new EventEmitter();

  onAddCartClick() {
    this.addCart.emit(this.product);
  }
}
