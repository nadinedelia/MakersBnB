describe('Index page displays title', () => {
  it('Makers BnB', () => {
    browser.url('/');
    const title = browser.getTitle();
    expect(browser).toHaveTitle('MakersBnB');
  });
});

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

describe('Sign Up succeeded', () => {
  it('Remains on signup page', () => {
    browser.url('/signup');
    const first_name = $('#first_name');
    const last_name = $('#last_name');
    const email = $('#email');
    const username = $('#username');
    const password = $('#password');
    first_name.setValue('Donald');
    last_name.setValue('Trump');
    email.setValue('donald@trump.com');
    username.setValue('TheRealDonald'); // fill in username and password fields.
    password.setValue('123');
    const mybutton = $('#button');
    mybutton.click();
    expect(browser).toHaveUrl('http://localhost:3000/spaces');
  });
});

describe('Sucessful login', () => {
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
