import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputQuantityComponent } from './components/input-quantity/input-quantity.component';
import { FormsModule } from '@angular/forms';

import { FilePondModule, registerPlugin } from 'ngx-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

registerPlugin(
  FilePondPluginFileValidateType, 
  FilePondPluginFileEncode, 
  FilePondPluginImagePreview
);

@NgModule({
  declarations: [
    InputQuantityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FilePondModule
  ],
  exports: [ InputQuantityComponent, FilePondModule ]
})
export class SharedModule { }
