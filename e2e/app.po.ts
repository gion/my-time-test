import { browser, by, element } from 'protractor';

export class AppPage {
  private _navigateTo(path:string = '') {
    return browser.get(`${browser.baseUrl}${path}`);
  }

  navigateTo(path:string = '') {
    return this
      ._navigateTo(path)
      .then(() => browser.waitForAngular());
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getBookingButton() {
    return element(by.css('app-root a[md-button]'));
  }

  getSpinner() {
    return element(by.css('app-root md-spinner'));
  }

  getUrl() {
    return browser.getCurrentUrl()
      .then(url => url.replace(browser.baseUrl, ''));
  }
}
