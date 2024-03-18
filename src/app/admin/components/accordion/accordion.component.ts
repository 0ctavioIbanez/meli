import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() active: boolean = false;
  @Input() disabled: boolean = false;
  @Input() title: string = '';
  @Output() onToggleAccordion: EventEmitter<boolean> = new EventEmitter();

  get behaviorHandler() {
    if (this.disabled) {
      return 'opacity-50 bg-indigo-100/70 rounded-lg';
    }
    if (this.active) {
      return 'bg-indigo-200 rounded-t-lg';
    }
    return 'bg-indigo-100/70 rounded-lg';
  }

  onToggle() {
    if (this.disabled) {
      return;
    }
    this.active = !this.active;
    this.onToggleAccordion.emit(this.active);
  }
}
