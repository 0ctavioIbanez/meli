import { Component } from '@angular/core';
import { Routes } from '../../interface.admin';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {
  routes: Routes[] = [{
    path: 'products',
    label: 'Productos',
    items: [
      {
        path: '/admin/products/all',
        label: 'Mis productos',
        icon: ''
      },
      {
      path: '/admin/products/product',
      label: 'Nuevo',
      icon: ''
    }]
  }];

  toggleAccordion(container:HTMLDivElement, accordionRef: HTMLDivElement) {
    const isCollapsed = accordionRef.classList.contains('accordion-collapsed')

    if (isCollapsed) {
      container.classList.add('bg-indigo-900')
      accordionRef.classList.remove('accordion-collapsed');
    } else {
      container.classList.remove('bg-indigo-900')
      accordionRef.classList.add('accordion-collapsed');
    } 
  }
}
