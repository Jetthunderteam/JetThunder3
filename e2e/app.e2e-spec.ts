import { JetThunder3LaunchPage } from './app.po';

describe('jet-thunder3-launch App', function() {
  let page: JetThunder3LaunchPage;

  beforeEach(() => {
    page = new JetThunder3LaunchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
