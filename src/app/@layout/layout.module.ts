import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

// Layouts
import { DefaultComponent } from './default/default.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';

// Modules
import { SharedModule } from '@shared';
import { I18nModule } from '@modules/i18n';
import { AuthModule } from '@modules/auth';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, I18nModule, AuthModule, RouterModule],
  declarations: [DefaultComponent, AboutComponent, HelpComponent],
  exports: [DefaultComponent, AboutComponent, HelpComponent],
})
export class LayoutModule {}
