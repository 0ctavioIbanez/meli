import { Component, DoCheck, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilePond } from 'filepond';
import { Model, Product, ServiceResponse } from 'src/app/admin/interface.admin';
import { ModelService } from 'src/app/services/model/model.service';
import { ProductService } from 'src/app/services/product/product.service';
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
  @ViewChild('pond') pond!: FilePond;
  product: Product = {
    id: uuid(),
    name: '',
    amount: 0,
    price: 0
  };
  model: Model = {
    id: uuid(),
    color: '',
    size: '',
    stock: 0
  };
  models: Model[] = [];

  constructor(private producService: ProductService, private modelService: ModelService, private route: ActivatedRoute, private router: Router) {
    this.get(this.route.snapshot.queryParams['productId']);
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
    } else {
      this.isModelFilled = true;
    }
  }

  private responseHandler({ message, status }: ServiceResponse) {
    console.log("TODO");
  }

  get(productId: 'string' | undefined) {
    if (!productId) {
      return;
    }
    this.producService.get(productId).subscribe(({ response = {} }: ServiceResponse) => {
      const { models = [] } = response;
      
      this.product = response;
      this.models = models;
    });
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
  }

  createProduct() {
    this.producService.create({
      ...this.product,
      image: this.pond.getFile().getFileEncodeBase64String()
    }).subscribe((res: any) => this.responseHandler(res));
    this.modelService.addToProduct(this.product.id, this.models).subscribe(res => {
      this.responseHandler(res);
      this.router.navigateByUrl(`/admin/products/product?productId=${this.product.id}`);
    });
  }

}
