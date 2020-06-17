describe('webdriver.io page', () => {
  it('should have the right title', () => {
    browser.url('/');
    const title = browser.getTitle();
    expect(browser).toHaveTitle('MakersBnB');
  });
});

describe('webdriver.io page', () => {
  it('should have the right title', () => {
    browser.url('/login');
    const mybutton = $('#button');
    mybutton.click();
    var url = browser.getUrl();
    console.log('url');
    expect(browser).toHaveUrl('http://localhost:3000/login');
  });
});
