import { Ng2CliTestePage } from './app.po';

describe('ng2-cli-teste App', () => {
  let page: Ng2CliTestePage;

  beforeEach(() => {
    page = new Ng2CliTestePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
