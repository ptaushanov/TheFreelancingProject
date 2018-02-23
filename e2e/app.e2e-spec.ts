import { TheFreelancingProjectPage } from './app.po';

describe('the-freelancing-project App', () => {
  let page: TheFreelancingProjectPage;

  beforeEach(() => {
    page = new TheFreelancingProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
