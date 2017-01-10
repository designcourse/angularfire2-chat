import { ChatapperPage } from './app.po';

describe('chatapper App', function() {
  let page: ChatapperPage;

  beforeEach(() => {
    page = new ChatapperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
