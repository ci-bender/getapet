export const environment = {
  production: false,
  configuration: 'development',
  app_name: 'GetAPet',
  app_base_url: 'http://localhost:4200',
  api_base_url: 'http://localhost:8080/v1',
  fe_base_url: 'http://localhost:8080/_fe',
  login_url: 'http://localhost:4200/oauth/authorize',
  logout_url: 'http://localhost:4200/oauth/logout',
  log_level: 4,
  enable_sentry: false,
  sentry_dsn: '',
  sentry_traces_rate: 1.0,
  default_language: 'en-US',
  supported_languages: ['en-US', 'de-DE'],
  theme_color: '#4fb6b5',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
