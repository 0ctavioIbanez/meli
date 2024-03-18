import { Component, DoCheck } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Model, Product, ServiceResponse } from 'src/app/admin/interface.admin';
import { ModelService } from 'src/app/admin/services/model/model.service';
import { ProductService } from 'src/app/admin/services/product/product.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements DoCheck {
  isProductFilled: boolean = false;
  isModelFilled: boolean = false;
  accordionToShow: string = 'product';
  product: Product = {
    id: uuid(),
    name: '',
    amount: 0,
  };
  model: Model = {
    id: uuid(),
    color: '',
    size: '',
    stock: 0
  };
  models: Model[] = [];

  constructor(private producService: ProductService, private modelService: ModelService) {

  }

  ngDoCheck() {
    if (this.accordionToShow === 'product') {
      this.checkProduct();
    } else {
      this.checkModel();
    }
  }

  private checkProduct() {
    if (this.product.amount && this.product.name) {
      this.isProductFilled = true;
    } else {
      this.isProductFilled = false;
    }
  }

  private checkModel() {
    const isValid = Object.values(this.model).every(val => val);
    
    if (!isValid) {
      this.isModelFilled = false;
    }
    this.isModelFilled = true;
  }

  private responseHandler({ message, status }: ServiceResponse) {
    console.log("TODO");
    
  }

  onAddClick() {
    if (this.isProductFilled) {
      this.accordionToShow = 'models';
    } else {
      this.accordionToShow = 'product';
    }
  }

  onAddModel() {
    this.models.push({...this.model});
    this.model = {
      id: uuid(),
      color: '',
      size: '',
      hex: '#000000',
      stock: 0
    };
    this.isModelFilled = false;
  }

  createProduct() {
    this.producService.create(this.product).subscribe((res: any) => this.responseHandler(res));
    this.modelService.addToProduct(this.product.id, this.models).subscribe(res => this.responseHandler(res));
  }

}
