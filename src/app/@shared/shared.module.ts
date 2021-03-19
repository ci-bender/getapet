import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './components/loader/loader.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    CardComponent
  ],
  exports: [
    LoaderComponent,
    CardComponent
  ]
})
export class SharedModule {}
