import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Model, ModelActionClick } from '../../interface.admin';

@Component({
  selector: 'model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.scss']
})
export class ModelCardComponent {
  @Input() model: Model = {
    id: '',
    color: '',
    stock: 0,
  };
  @Output() onActionClick: EventEmitter<ModelActionClick> = new EventEmitter();

  onClick(action: string) {
    this.onActionClick.emit({ action, modelId: this.model.id });
  }
}
