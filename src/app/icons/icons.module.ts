import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons';
import { 
  IconPencil,
  IconChevronUp,
  IconCurrencyDollar,
  IconStackPush,
  IconShoppingCartPlus,
  IconShoppingCart,
  IconCubePlus,
  IconChecklist,
  IconEdit,
  IconTrashX
 } from 'angular-tabler-icons/icons';

const icons = {
  IconPencil,
  IconChevronUp,
  IconCurrencyDollar,
  IconStackPush,
  IconShoppingCartPlus,
  IconShoppingCart,
  IconCubePlus,
  IconChecklist,
  IconEdit,
  IconTrashX
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TablerIconsModule.pick(icons)
  ],
  exports: [TablerIconsModule]
})
export class IconsModule { }
