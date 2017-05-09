import { browser, element, by } from 'protractor';

export class ZipwhipPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bot-root h1')).getText();
  }
}
