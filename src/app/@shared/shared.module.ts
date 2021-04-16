import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { I18nModule } from '@modules/i18n';

import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { HeaderAboutComponent } from '@shared/components/header-about/header-about.component';
import { CardComponent } from '@shared/components/card/card.component';
import { SearchKoanComponent } from '@shared/components/search-koan/search-koan.component';

@NgModule({
  imports: [CommonModule, TranslateModule, I18nModule],
  declarations: [LoadingSpinnerComponent, FooterComponent, HeaderComponent, HeaderAboutComponent, CardComponent, SearchKoanComponent],
  exports: [LoadingSpinnerComponent, FooterComponent, HeaderComponent, HeaderAboutComponent, CardComponent, SearchKoanComponent],
})
export class SharedModule {}
