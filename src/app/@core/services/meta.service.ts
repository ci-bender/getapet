import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MetaTags } from '@shared/models/MetaTags';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  public author = 'zaflun UG';
  public basicKeywords = [''];
  public description = '';

  constructor(private meta: Meta, private titleService: Title) {}

  public setBasicMetaTags(content: MetaTags): void {
    this.titleService.setTitle(content.title + ' - ' + environment.appName);

    // MISC
    this.meta.addTag({ name: 'theme-color', content: environment.themeColor });
    this.meta.addTag({ name: 'google-site-verification', content: '' });
    this.meta.addTag({ name: 'google', content: 'notranslate' });

    // META DATA
    this.meta.addTag({ name: 'description', content: content.description ? content.description : this.description });
    this.meta.addTag({ name: 'keywords', content: content.keywords.concat(this.basicKeywords).join(',') });
    this.meta.addTag({ name: 'author', content: content.author ? content.author : this.author });
    this.meta.addTag({ name: 'revisit-after', content: '2 days' });

    // OG TAGS
    this.meta.addTag({ property: 'og:type', content: 'website' });
    this.meta.addTag({ property: 'og:url', content: environment.appUrl });
    this.meta.addTag({ property: 'og:title', content: content.title + ' - ' + environment.appName });
    this.meta.addTag({ property: 'og:site_name', content: environment.appName });
    this.meta.addTag({
      property: 'og:description',
      content: content.description ? content.description : this.description,
    });
    this.meta.addTag({ property: 'og:locale', content: '' });
    this.meta.addTag({ property: 'og:image', content: '/assets/images/banner/1200x600.png' });
    this.meta.addTag({ property: 'og:image:secure_url', content: '/assets/images/banner/1200x600.png' });
    this.meta.addTag({ property: 'og:image:type', content: 'image/jpeg' });
    this.meta.addTag({ property: 'og:image:width', content: '1200' });
    this.meta.addTag({ property: 'og:image:height', content: '600' });
    this.meta.addTag({ itemprop: 'url', content: environment.appUrl });
    this.meta.addTag({ itemprop: 'image', content: '/assets/images/banner/1200x600.png' });
    this.meta.addTag({ itemprop: 'target', content: '' });

    // SOCIAL TWITTER
    this.meta.addTag({ name: 'twitter:card', content: 'summary' });
    this.meta.addTag({ name: 'twitter:creator', content: '@zaflunDE' });
    this.meta.addTag({ name: 'twitter:site', content: '@zaflunDE' });
    this.meta.addTag({ name: 'twitter:title', content: content.title + ' - ' + environment.appName });
    this.meta.addTag({
      name: 'twitter:description',
      content: content.description ? content.description : this.description,
    });
    this.meta.addTag({ name: 'twitter:image', content: '/assets/images/banner/1200x600.png' });

    // SOCIAL FACEBOOK
    this.meta.addTag({ property: 'fb:page_id', content: '325207994984323' });

    // ADD TO HOMESCREEN FOR CHROME ON ANDROID
    this.meta.addTag({ name: 'mobile-web-app-capable', content: 'yes' });

    // ADD TO HOMESCREEN FOR SAFARI ON IOS
    this.meta.addTag({ name: 'apple-mobile-web-app-capable', content: 'yes' });
    this.meta.addTag({ name: 'apple-mobile-web-app-status-bar-style', content: '#007bfc' });
    this.meta.addTag({ name: 'apple-mobile-web-app-title', content: environment.appName });

    // TITLE ICON FOR WIN8 (144x144 + tile color)
    this.meta.addTag({
      name: 'msapplication-TileImage',
      content: '/assets/favicons/favicon-colored--white-padding-512x512.png',
    });
    this.meta.addTag({ name: 'msapplication-TileColor', content: environment.themeColor });
    this.meta.addTag({ name: 'msapplication-config', content: '/browserconfig.xml' });
  }
}
