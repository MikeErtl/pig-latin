import { Pri2Page } from './app.po';

describe('pri2 App', () => {
  let page: Pri2Page;

  beforeEach(() => {
    page = new Pri2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
