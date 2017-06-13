import { AppSpotifyPage } from './app.po';

describe('app-spotify App', () => {
  let page: AppSpotifyPage;

  beforeEach(() => {
    page = new AppSpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
