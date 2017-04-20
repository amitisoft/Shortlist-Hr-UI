import { AmitiOnlineTestPage } from './app.po';

describe('amiti-online-test App', () => {
  let page: AmitiOnlineTestPage;

  beforeEach(() => {
    page = new AmitiOnlineTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('amiti works!');
  });
});
