import { browser, element, by } from 'protractor';

export class BotsonPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bot-root h1')).getText();
  }
}
