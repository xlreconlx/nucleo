import { NucleoPage } from './app.po';

describe('nucleo App', () => {
  let page: NucleoPage;

  beforeEach(() => {
    page = new NucleoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
