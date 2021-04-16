import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';

import { environment } from '@env/environment';
import { SentryModule } from '@modules/sentry';
import { LottieWebModule } from '@modules/lottie-web';
import { CoreModule } from '@core';
import { LayoutModule } from '@layout';
import { SharedModule } from '@shared';
import { AuthModule } from '@modules/auth';
import { HomeModule } from '@app/views/home/home.module';
import { AboutModule } from '@app/views/about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    environment.enable_sentry ? SentryModule.forRoot() : [],
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    CoreModule,
    SharedModule,
    AuthModule,
    LottieWebModule,
    LayoutModule,
    HomeModule,
    AboutModule,
    ReactiveFormsModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
