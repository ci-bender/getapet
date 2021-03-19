import { browser, ExpectedConditions as until } from 'protractor';
import { LoginPage } from './page-objects/login.po';
import { AppSharedPage } from './page-objects/app-shared.po';

describe('when the app loads', () => {
  const login = new LoginPage();
  const app = new AppSharedPage();

  beforeAll(async () => {
    await app.navigateAndSetLanguage();
  });

  it('should display the login page', async () => {
    expect(await browser.getCurrentUrl()).toContain('/login');
  });

  describe('and the user logs in', () => {
    beforeAll(async () => {
      await login.login();
    });
  });
});
