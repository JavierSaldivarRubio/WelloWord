import { Ejemp1Page } from './app.po';

describe('ejemp1 App', function() {
  let page: Ejemp1Page;

  beforeEach(() => {
    page = new Ejemp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
