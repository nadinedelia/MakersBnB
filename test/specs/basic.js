describe('webdriver.io page', () => {
  it('should have the right title', () => {
    browser.url('/');
    const title = browser.getTitle();
    expect(browser).toHaveTitle('MakersBnB');
  });
});
