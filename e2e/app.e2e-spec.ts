import { ZipwhipPage } from './app.po';

describe('Zipwhip App', () => {
  let page: ZipwhipPage;

  beforeEach(() => {
    page = new ZipwhipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bot works!');
  });
});
