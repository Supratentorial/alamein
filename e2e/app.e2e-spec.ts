import { AlameinPage } from './app.po';

describe('alamein App', function() {
  let page: AlameinPage;

  beforeEach(() => {
    page = new AlameinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
