const helper = require('../../test_helper.js');
describe('Index page displays title', () => {
  it('Makers BnB', () => {
    browser.url('/');
    const title = browser.getTitle();
    expect(browser).toHaveTitle('Welcome to MakersBnB');
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
    password.setValue('GretaThunberg');
    const mybutton = $('#button');
    mybutton.click();
    expect(browser).toHaveUrl('http://localhost:3000/spaces');
  });
});
