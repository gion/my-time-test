import { AppPage } from './app.po';

describe('my-time-test first journey', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('WELCOME TO OUR FB PAGE!');
  });

  it('should have a link that makes an appointment', () => {
    page.navigateTo();
    expect(page.getBookingButton().getText()).toEqual('Make an appointment!');
  });

  it('should go to locations after clicking the appointment link', () => {
    page.navigateTo();
    page.getBookingButton().click();
    expect(page.getUrl()).toBe('/locations');
  });
});
