import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { MetaTagsModel } from '@shared/models/MetaTags';
import { environment } from '@env/environment';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  public setTitle: string;
  public author = 'zaflun UG';
  public basicKeywords = [''];
  public description: string | 'GetAPet is a free app keeping you connected to several animal shelters.';

  constructor(private router: Router, private metaService: Meta, private titleService: Title, private translateService: TranslateService) {}

  public setBasicMetaTags(content: MetaTagsModel): void {
    // Get translate strings
    if (content.title === undefined) {
      // Set translated title with "titleTranslate: ''"
      this.translateService.get(content.titleTranslate).subscribe((res: string) => {
        this.setTitle = res;
      });
    } else {
      // Set non-translate title with "title: ''"
      this.setTitle = content.title;
    }

    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      // Set onLangChange vars
      this.setTitle = this.translateService.instant(content.titleTranslate) + ' - ' + environment.app_name;
      this.description = content.description ? content.description : this.translateService.instant('meta.description');

      // Set new title onLangChange
      this.titleService.setTitle(this.setTitle);

      // Update Meta Tag onLangChange
      this.metaService.updateTag({ property: 'og:title', content: this.setTitle });
      this.metaService.updateTag({ name: 'twitter:title', content: this.setTitle });
      this.metaService.updateTag({ name: 'description', content: this.description });
      this.metaService.updateTag({ property: 'og:description', content: this.description });
      this.metaService.updateTag({ name: 'twitter:description', content: this.description });
    });

    this.translateService.get('meta.description').subscribe((res: string) => {
      this.description = res;
    });

    // Set Page Title
    this.titleService.setTitle(this.setTitle + ' - ' + environment.app_name);

    // MISC
    this.metaService.addTag({ name: 'theme-color', content: environment.theme_color });
    this.metaService.addTag({ name: 'google-site-verification', content: '' });
    this.metaService.addTag({ name: 'google', content: 'notranslate' });

    // META DATA
    this.metaService.addTag({
      name: 'description',
      content: content.description ? content.description : this.description,
    });
    this.metaService.addTag({ name: 'keywords', content: content.keywords.concat(this.basicKeywords).join(',') });
    this.metaService.addTag({ name: 'author', content: content.author ? content.author : this.author });
    this.metaService.addTag({ name: 'revisit-after', content: '2 days' });

    // OG TAGS
    this.metaService.addTag({ property: 'og:type', content: 'website' });
    this.metaService.addTag({ property: 'og:url', content: environment.app_base_url + this.router.url });
    this.metaService.addTag({ property: 'og:title', content: this.setTitle + ' - ' + environment.app_name });
    this.metaService.addTag({ property: 'og:site_name', content: environment.app_name });
    this.metaService.addTag({
      property: 'og:description',
      content: content.description ? content.description : this.description,
    });
    this.metaService.addTag({ property: 'og:locale', content: this.translateService.currentLang });
    this.metaService.addTag({ property: 'og:image', content: '/assets/images/banner/1200x600.jpg' });
    this.metaService.addTag({ property: 'og:image:secure_url', content: '/assets/images/banner/1200x600.jpg' });
    this.metaService.addTag({ property: 'og:image:type', content: 'image/jpeg' });
    this.metaService.addTag({ property: 'og:image:width', content: '1200' });
    this.metaService.addTag({ property: 'og:image:height', content: '600' });
    this.metaService.addTag({ itemprop: 'url', content: environment.app_base_url + this.router.url });
    this.metaService.addTag({ itemprop: 'image', content: '/assets/images/banner/1200x600.jpg' });
    this.metaService.addTag({ itemprop: 'target', content: '' });

    // SOCIAL TWITTER
    this.metaService.addTag({ name: 'twitter:card', content: 'summary' });
    this.metaService.addTag({ name: 'twitter:creator', content: '@withzaflun' });
    this.metaService.addTag({ name: 'twitter:site', content: '@withGetAPet' });
    this.metaService.addTag({ name: 'twitter:title', content: this.setTitle + ' - ' + environment.app_name });
    this.metaService.addTag({
      name: 'twitter:description',
      content: content.description ? content.description : this.description,
    });
    this.metaService.addTag({ name: 'twitter:image', content: '/assets/images/banner/1200x600.jpg' });

    // SOCIAL FACEBOOK
    this.metaService.addTag({ property: 'fb:page_id', content: '318185741996821' });

    // ADD TO HOMESCREEN FOR CHROME ON ANDROID
    this.metaService.addTag({ name: 'mobile-web-app-capable', content: 'yes' });

    // ADD TO HOMESCREEN FOR SAFARI ON IOS
    this.metaService.addTag({ name: 'apple-mobile-web-app-capable', content: 'yes' });
    this.metaService.addTag({ name: 'apple-mobile-web-app-status-bar-style', content: environment.theme_color });
    this.metaService.addTag({ name: 'apple-mobile-web-app-title', content: environment.app_name });

    // TITLE ICON FOR WIN8 (144x144 + tile color)
    this.metaService.addTag({
      name: 'msapplication-TileImage',
      content: '/assets/favicons/favicon-colored--white-padding-512x512.png',
    });
    this.metaService.addTag({ name: 'msapplication-TileColor', content: environment.theme_color });
    this.metaService.addTag({ name: 'msapplication-config', content: '/browserconfig.xml' });
  }
}
