
describe('Failed Login', () => {
  it('Remains on login page', () => {
    browser.url('/login');
    const username = $('#username');
    const password = $('#password');
    username.setValue('MileyCyrus');
    password.setValue('molly1234');
    const mybutton = $('#button');
    mybutton.click();
    var url = browser.getUrl();
    console.log('url');
    expect(browser).toHaveUrl('http://localhost:3000/login');
  });
});

describe('Successful login', () => {
  it('Moves onto spaces Page', () => {
    browser.url('/login');
    const username = $('#username');
    const password = $('#password');
    username.setValue('Pezzer101'); // fill in username and password fields.
    password.setValue('123');
    const mybutton = $('#button');
    mybutton.click();
    expect(browser).toHaveUrl('http://localhost:3000/spaces');
  });
});
