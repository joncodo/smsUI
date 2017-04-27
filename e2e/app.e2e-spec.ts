import { BotsonPage } from './app.po';

describe('botson App', () => {
  let page: BotsonPage;

  beforeEach(() => {
    page = new BotsonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bot works!');
  });
});
