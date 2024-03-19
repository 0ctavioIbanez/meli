import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'input-quantity',
  templateUrl: './input-quantity.component.html',
  styleUrls: ['./input-quantity.component.scss']
})
export class InputQuantityComponent {
  @Input() value: number = 0;
  @Input() max: number | boolean = false;
  @Input() min: number | boolean = false;
  @Input() invalid: boolean = false;
  @Input() disabled: boolean = false;
  @Output() onChange:EventEmitter<number> = new EventEmitter();

  increment() {    
    if (this.max && (Number(this.max) <= this.value)) {
      return;
    }
    this.value = Number(this.value) + 1;
    this.onChange.emit(this.value);
  }

  decrement() {
    if ((this.min || !this.value) && Number(this.min) <= this.value) {
      return;
    }
    this.value = Number(this.value) - 1;
    this.onChange.emit(this.value);
  }

}
