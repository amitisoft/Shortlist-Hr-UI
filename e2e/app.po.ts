import { browser, element, by } from 'protractor';

export class AmitiOnlineTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('amiti-root h1')).getText();
  }
}
