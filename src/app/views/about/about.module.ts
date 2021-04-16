import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { I18nModule } from '@modules/i18n';
import { ImprintComponent } from './imprint/imprint.component';
import { AboutRoutingModule } from './about-routing.module';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    I18nModule,
    SharedModule,
    AboutRoutingModule
  ],
  declarations: [ImprintComponent]
})
export class AboutModule { }
