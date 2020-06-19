const helper = require('../../test_helper.js');
describe('Failed Login from login page', () => {
  it('Remains on login page', () => {
    browser.url('/login');
    const username = $('#username');
    const password = $('#password');
    username.setValue('MileyCyrus');
    password.setValue('molly1234');
    const mybutton = $('#button');
    mybutton.click();
    expect(browser).toHaveUrl('http://localhost:3000/login');
  });
});

describe('Successful login from login page', () => {
  it('Moves onto spaces Page', () => {
    browser.url('/login')
    const username = $('#username');
    const password = $('#password');
    username.setValue('Pezzer101'); // fill in username and password fields.
    password.setValue('LutonTownFC');
    const mybutton = $('#button');
    mybutton.click();
    expect(browser).toHaveUrl('http://localhost:3000/spaces');
  });
});

describe('Failed Login from homepage', () => {
  it('Remains on login page', () => {
    browser.url('/');
    const username = $('#username');
    const password = $('#password');
    username.setValue('MileyCyrus');
    password.setValue('molly1234');
    const mybutton = $('#button');
    mybutton.click();
    expect(browser).toHaveUrl('http://localhost:3000/login');
  });
});
