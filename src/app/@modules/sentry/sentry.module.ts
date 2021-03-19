import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Sentry from '@sentry/browser';
import { environment } from '@env/environment';
import { Logger } from '@core/logger.service';

const log = new Logger('Sentry');

@Injectable({
  providedIn: 'root',
})
export class SentryErrorHandler implements ErrorHandler {
  constructor() {
    // Sentry inside the constructor instantiate it only if needed
    Sentry.init({
      dsn: environment.sentryUrl,
    });
  }

  public handleError(error: any): any {
    Sentry.captureException(error.originalError || error);
    const eventId = Sentry.captureException(error.originalError || error);
    // Sentry.showReportDialog({ eventId });

    log.debug(`Error Handler: ${eventId}`);
  }
}

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class SentryModule {
  public static forRoot(): any {
    return {
      ngModule: SentryModule,
      imports: [BrowserModule],
      providers: [
        {
          provide: ErrorHandler,
          useClass: SentryErrorHandler,
        },
      ],
    };
  }
}
